import React, { PropTypes } from "react"
import classnames from "classnames"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri, Link } from "phenomic"

import Button from "../../components/Button"
import Loading from "../../components/Loading"

import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
    displayChildrenFirst,
    bodyExtraClass,
  },
  {
    metadata: { pkg, settings },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.blurb || head.description },
    { name: "og:image", content: pkg.homepage + (head.background || head.hero) },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ settings.social.find(x => x.type === 'twitter').title }` },
    { name: "twitter:description", content: head.blurb || head.description },
    { name: "twitter:image", content: pkg.homepage + (head.background || head.hero) },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      {
        <div className={ styles.hero }>
          {
            head.hero &&
            <div className={ styles.heroBackground }>
              {
                head.hero.match(/(jpg|jpeg|png|gif)/gi)
                ? <img src={ head.hero } />
                : <video src={ head.hero } autoPlay loop muted playsInline />
              }
            </div>
          }
          <div className={ styles.header }>
            <div className={ styles.wrapper }>
              <h1 className={ styles.heading }>
                {
                  head.logolight
                  ? <img src={ head.logolight } alt={ head.title }/>
                  : head.title
                }
              </h1>
              {
                head.blurb &&
                <p className={ styles.blurb }>{ head.blurb }</p>
              }
              {
                head.cta &&
                <Link to={ head.cta.link }>
                  <Button className={ styles.cta } light { ...head.cta.props }>
                    { head.cta.label }
                  </Button>
                </Link>
              }
            </div>
          </div>
        </div>
      }
      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        {
          displayChildrenFirst &&
          children
        }
        {
          isLoading
          ? <Loading />
          : <BodyContainer className={ classnames(styles.body, bodyExtraClass) }>{ body }</BodyContainer>
        }
        {
          !displayChildrenFirst &&
          children
        }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  displayChildrenFirst: PropTypes.bool,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  bodyExtraClass: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page

import React, { PropTypes } from "react"
import classnames from "classnames"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"

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
    metadata: { settings },
  }
) => {
  invariant(
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
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ settings.social.find(x => x.type === 'twitter').title }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      {
        head.title &&
        <h1 className={ styles.heading }>{ head.title }</h1>
      }
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
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page

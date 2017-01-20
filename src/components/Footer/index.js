import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Footer = (props, { metadata: { settings } }) => (
  <footer className={ styles.footer }>
    <nav className={ styles.nav }>
      <ul className={ styles.navPartSocial }>
        {
          settings.social.map((socialItem) => (
            <li key={ socialItem.url } className="no-bullet-list">
              <Link to={ socialItem.url } className={ styles.link }>
                <img src={ socialItem.image } alt={ `${socialItem.title} ${socialItem.type}` } title={ `${socialItem.title} ${socialItem.type}` } />
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>

    <small className={ styles.notices } dangerouslySetInnerHTML={ {__html: settings.footer_notices} } />

    <small className={ styles.hosting }>
      Open source on
      <Link to="https://github.com/ustwogames/website">
        <span>Github</span>
        <img src="/assets/github-logo.svg" alt="Github logo" title="Github logo" />
      </Link>
      <br/>
      Built and hosted by
      <Link to="https://www.netlify.com">
        <span>Netlify</span>
        <img src="/assets/netlify-logo.svg" alt="Netlify logo" title="Netlify logo" />
      </Link>

    </small>
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer

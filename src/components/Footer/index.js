import React, { PropTypes } from "react"

import styles from "./index.css"

const Footer = (props, { metadata: { settings } }) => (
  <footer className={ styles.footer }>
    <nav className={ styles.nav }>
      <div className={ styles.navPartSocial }>
        {
          settings.social.map((socialItem) => (
            <a key={ socialItem.url } href={ socialItem.url } className={ styles.link }>
              <img src={ socialItem.image } alt={ socialItem.title } />
            </a>
          ))
        }
      </div>
    </nav>
    <small>
      { "For company information and other legal bits, see our legal page." }
    </small>
    <small>
      { "We’re using cookies, hope that’s cool. Here’s our Privacy Policy." }
    </small>
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer

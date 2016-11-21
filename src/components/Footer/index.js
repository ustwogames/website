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
    <small className={ styles.notices } dangerouslySetInnerHTML={ {__html: settings.footer_notices} } />
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer

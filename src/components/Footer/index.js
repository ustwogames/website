import React, { PropTypes } from "react"

import styles from "./index.css"

const Footer = (props, { metadata: { settings } }) => (
  <footer className={ styles.footer }>
    <nav className={ styles.nav }>
      <div className={ styles.navPartSocial }>
        <p>
          {
            settings.twitter &&
            <a
              href={ `https://twitter.com/${settings.twitter}` }
              className={ styles.link }
            >
              { "Twitter" }
          </a>
          }
        </p>
        <p>
          {
            settings.instagram &&
            <a
              href={ `https://instagram.com/${settings.instagram}` }
              className={ styles.link }
            >
              { "Instagram" }
          </a>
          }
        </p>
        <p>
          {
            settings.email &&
            <a
              href={ `mailto:${settings.email}` }
              className={ styles.link }
            >
              { "Email" }
          </a>
          }
        </p>
        <p>
          {
            settings.medium &&
            <a
              href={ `https://medium.com/${settings.medium}` }
              className={ styles.link }
            >
              { "Medium" }
          </a>
          }
        </p>
        <p>
          {
            settings.facebook &&
            <a
              href={ `https://facebook.com/${settings.facebook}` }
              className={ styles.link }
            >
              { "Facebook" }
          </a>
          }
        </p>
      </div>
    </nav>
    <p>
      { "For company information and other legal bits, see our legal page." }
    </p>
    <p>
      { "We’re using cookies, hope that’s cool. Here’s our Privacy Policy." }
    </p>
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer

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
              <img src='/assets/twitter.svg' />
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
              <img src='/assets/instagram.svg' />
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
              <img src='/assets/email.svg' />
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
              <img src='/assets/medium.svg' />
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
              <img src='/assets/facebook.svg' />
          </a>
          }
        </p>
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

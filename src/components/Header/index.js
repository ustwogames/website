import React, { PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"

const Header = (props, { metadata: { settings } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      {
        settings.nav.map((navItem) => (
          navItem.url.includes('http') ?
          <a
            key={ navItem.url }
            className={ styles.link }
            href={ navItem.url }
          >
            { navItem.title }
          </a> :
          <Link
            key={ navItem.url }
            className={ styles.link }
            to={ navItem.url }
          >
            { navItem.title }
          </Link>
        ))
      }
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

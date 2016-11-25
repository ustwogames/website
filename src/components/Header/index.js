import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Header = (props, { metadata: { settings } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      {
        settings.nav.map((navItem) => (
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

import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Header = (props, { metadata: { settings } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <Link className={ styles.link } to='/'><img src='/assets/ustwo-games.svg' className={ styles.logotype } /></Link>
      <ul>
        {
          settings.nav.map((navItem) => (
            <li key={ navItem.url } className="no-bullet-list">
              <Link className={ styles.link } to={ navItem.url }>
                { navItem.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

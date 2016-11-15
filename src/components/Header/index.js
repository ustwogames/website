import React from "react"
import { Link } from "react-router"

import styles from "./index.css"

const Header = () => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <Link
        className={ styles.link }
        to="/"
      >
        { "Home" }
      </Link>
      <Link
        className={ styles.link }
        to="/games"
      >
        { "Games" }
      </Link>
      <Link
        className={ styles.link }
        to="/about"
      >
        { "About us" }
      </Link>
      <Link
        className={ styles.link }
        to="/jobs"
      >
        { "Jobs" }
      </Link>
      <Link
        className={ styles.link }
        to="/support"
      >
        { "Support" }
      </Link>
      <Link
        className={ styles.link }
        to="/contact"
      >
        { "Contact" }
      </Link>
      <a
        className={ styles.link }
        href="https://medium.com/ustwo-games"
      >
        { "Blog" }
      </a>
    </nav>
  </header>
)

export default Header

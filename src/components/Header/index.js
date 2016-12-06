import React, { Component, PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen });
  }

  onNavigation() {
    this.setState({menuOpen: false });
  }

  render() {
    return (
      <header className={ `${ styles.header } ${ this.state.menuOpen ? styles.menuOpen : "" }` }>
        <nav className={ styles.nav }>
          <Link className={ styles.logo } to="/"><img src="/assets/ustwo-games.svg" className={ styles.logotype } /></Link>
          <button className={ styles.menuToggle } onClick={ () => { this.toggleMenu() } }>
            <img src="/assets/menu.svg" />
          </button>
          <ul>
            {
              this.context.metadata.settings.nav.map((navItem) => (
                <li key={ navItem.url } className="no-bullet-list">
                  <Link className={ styles.link } to={ navItem.url } onClick={ () => { this.onNavigation() } }>
                    { navItem.title }
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    )
  }
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

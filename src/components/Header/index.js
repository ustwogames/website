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

  onLogoClick() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <header className={ `${ styles.header } ${ this.state.menuOpen ? styles.menuOpen : "" }` }>
        <nav className={ styles.nav }>
          <button className={ styles.logo } onClick={ () => { this.onLogoClick() } }>
            <img src="/assets/ustwo-games.svg" className={ styles.logotype } alt="Scroll to top" />
          </button>
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

import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Footer = (props, { metadata: { settings } }) => (
  <footer className={ styles.footer }>
    <nav className={ styles.nav }>
      <ul className={ styles.navPartSocial }>
        {
          settings.social.map((socialItem) => (
            <li key={ socialItem.url } className="no-bullet-list">
              <Link to={ socialItem.url } className={ styles.link }>
                <img src={ socialItem.image } alt={ socialItem.title } />
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>

    <div id="mc_embed_signup">
      <form action="//ustwogames.us14.list-manage.com/subscribe/post?u=4fc4bb980aaf05ff749e5211c&amp;id=fdceefe663" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
          <input type="email" name="EMAIL" placeholder="Email address" className="required email" id="mce-EMAIL" />
          <input role='button' type="submit" value="Subscribe to our mailing list" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
          <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
        </div>
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_4fc4bb980aaf05ff749e5211c_fdceefe663" tabIndex="-1" /></div>
      </div>
    </form>
    </div>

    <small className={ styles.notices } dangerouslySetInnerHTML={ {__html: settings.footer_notices} } />
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer

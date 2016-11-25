import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Footer = (props, { metadata: { settings } }) => (
  <footer className={ styles.footer }>
    <nav className={ styles.nav }>
      <div className={ styles.navPartSocial }>
        {
          settings.social.map((socialItem) => (
            <Link key={ socialItem.url } to={ socialItem.url } className={ styles.link }>
              <img src={ socialItem.image } alt={ socialItem.title } />
            </Link>
          ))
        }
      </div>
    </nav>

    <div id="mc_embed_signup">
      <form action="//ustwogames.us14.list-manage.com/subscribe/post?u=4fc4bb980aaf05ff749e5211c&amp;id=fdceefe663" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our mailing list</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
          </label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-FNAME">First Name </label>
          <input type="text" name="FNAME" className="" id="mce-FNAME" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-LNAME">Last Name </label>
          <input type="text" name="LNAME" className="" id="mce-LNAME" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
          <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
        </div>
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_4fc4bb980aaf05ff749e5211c_fdceefe663" tabIndex="-1" /></div>
        <div className="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
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

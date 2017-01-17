import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import { Link } from "phenomic"

import Page from "../Page"
// import FaqList from "../../components/FaqList"
import Button from "../../components/Button"

import styles from "./index.css"

// const Support = (props, { metadata: { settings } }) => {
class Support extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(window) {
      window.zESettings = {
        webWidget: {
          contactForm: {
            subject: true
          }
        }
      };

      window.zE(function() {
        window.zE.hide();
      });
    }
  }

  render() {
    return (
      <Page
        { ...this.props }
      >
        <Helmet
          script={ [
            {"type": "text/javascript", "innerHTML": `window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","ustwogames.zendesk.com");`},
          ] }
        />
        <div className="content-box">
          <h2 className={ styles.faqHeading }>FAQs</h2>
          {/* <FaqList faqs={ settings.faqs } /> */}
          <p>
            <Link to="http://blog.monumentvalleygame.com/faq/">Monument Valley FAQ</Link>
            <br/>
            <Link to="http://www.landsendgame.com/customer-support/">Land’s End FAQ</Link>
          </p>
        </div>
        <div className="content-box">
          <h2 className={ styles.faqHeading }>Support</h2>
          <p>
            <Button big onClick={ () => { window.zE.activate({hideOnClose: true}); } }>Create support ticket</Button>
          </p>
        </div>
      </Page>
    )
  }
}

Support.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Support

import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import { Link } from "phenomic"

import Page from "../Page"
import TextContentBox from "../../components/TextContentBox"
import Button from "../../components/Button"

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
        <div className='squashed-columns'>
          <TextContentBox title="FAQs">
            <p>
              We’ve collected up Q&As about our games and how to get the most out of them
            </p>
            <p>
              <Link to="http://blog.monumentvalleygame.com/faq/">
                <Button>Monument Valley FAQ</Button>
              </Link>
              <br/>
              <Link to="http://www.landsendgame.com/customer-support/">
                <Button>Land’s End FAQ</Button>
              </Link>
            </p>
          </TextContentBox>
          <TextContentBox title="Support">
            <h4>Lost in Land’s End?<br/>Mystified by Monument Valley?</h4>
            <p>
              Don’t worry, we’ve got you! If you need some help, please create a support ticket and we’ll get back to you as soon as we can!
            </p>
            <p>
              <Button onClick={ () => { window.zE.activate({hideOnClose: true}); } }>Create support ticket</Button>
            </p>
          </TextContentBox>
        </div>
      </Page>
    )
  }
}

Support.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Support

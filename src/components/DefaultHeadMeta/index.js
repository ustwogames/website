import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg, settings } }) => (
  <div hidden>
    <Helmet
      link={ [
        { "rel": "icon", "href": "/assets/favicon.ico" },
      ] }
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ settings.social.find(x => x.type === 'twitter').title }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        { src: "//cdn.iubenda.com/iubenda.js" },
        ...props.scripts ? props.scripts : [],
        {
          innerHTML: `
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "lang": "en",
              "siteId": 374894,

              "banner": {
                "textColor": "#f8f8f8",
                "backgroundColor": "#111111",
                "slideDown":false,
                "applyStyles":false
              },
              "cookiePolicyId": 322454
            };
          `
        },
        {
          src: "//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js",
          charSet: "UTF-8",
          async: true
        },
        {
          src: "https://cdn.iubenda.com/consent_solution/iubenda_cons.js",
          async: true
        },
        {
          innerHTML: `
            _iub.cons.init({
              api_key: "bOp5htwRdMQ7LjqzPwsW02Uzkle9qsdQ"
            });
          `
        }
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta

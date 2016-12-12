import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import ProfilesList from "../../components/ProfilesList"
import styles from "./index.css"

const About = (props, { collection }) => {
  const profiles = enhanceCollection(collection, {
    filter: { layout: "Profile" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props } bodyExtraClass={ styles.aboutBody }>
      <ProfilesList profiles={ profiles } />
    </Page>
  )
}

About.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default About

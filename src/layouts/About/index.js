import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic"

import Page from "../Page"
import ProfilesList from "../../components/ProfilesList"
import Button from "../../components/Button"

import styles from "./index.css"

const About = (props, { collection }) => {
  const profiles = enhanceCollection(collection, {
    filter: { layout: "Profile" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props } hideMailingList bodyExtraClass={ styles.aboutBody }>
      <h5 className={ styles.centredTitle }>Think you might be interested in joining the team?</h5>
      <Link to="/jobs">
        <Button>See our current vacancies</Button>
      </Link><br/>
      <ProfilesList profiles={ profiles } />
    </Page>
  )
}

About.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default About

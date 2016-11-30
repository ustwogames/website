import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Page from "../Page"

const Job = (props) => {
  return (
    <Page { ...props }>
      <Link to={ props.head.url }>
        <span>For more information and to apply, click here!</span>
      </Link>
    </Page>
  )
}

Job.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Job

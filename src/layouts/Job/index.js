import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Page from "../Page"
import Button from "../../components/Button"

const Job = (props) => {
  return (
    <Page { ...props } hideMailingList>
      <Link to={ props.head.url }>
        <Button>For more information or to apply, please click here</Button>
      </Link>
    </Page>
  )
}

Job.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Job

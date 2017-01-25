import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Page from "../Page"
import Button from "../../components/Button"

const Job = (props) => {
  return (
    <Page { ...props }>
      <Link to={ props.head.url }>
        <Button>For more information and to apply > clicky tappy</Button>
      </Link>
    </Page>
  )
}

Job.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Job

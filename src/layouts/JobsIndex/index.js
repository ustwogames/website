import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import JobsList from "../../components/JobsList"

const JobsIndex = (props, { collection }) => {
  const jobs = enhanceCollection(collection, {
    filter: { layout: "Job" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <JobsList jobs={ jobs } />
    </Page>
  )
}

JobsIndex.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default JobsIndex

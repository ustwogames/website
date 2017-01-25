import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic"

import Button from "../../components/Button"
import TextContentBox from "../../components/TextContentBox"
import Page from "../Page"

const JobsIndex = (props, { collection }) => {
  const jobs = enhanceCollection(collection, {
    filter: { layout: "Job" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <div className="jobs-columns">
          {
            jobs.map((job) => (
              <TextContentBox key={ job.__url } title={ job.title }>
                <p>
                  { job.blurb }
                </p>
                <p>
                  <Link to={ job.__url }>
                    <Button>{ `Maybe it's you!` }</Button>
                  </Link>
                </p>
              </TextContentBox>
            ))
          }
      </div>
    </Page>
  )
}

JobsIndex.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default JobsIndex

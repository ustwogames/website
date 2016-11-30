import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const JobsList = ({ jobs }) => {
  return (
    <ul className={ styles.listContainer}>
        {
          jobs.map((job) => (
            <li key={ job.__url } className={ styles.listItem }>
              <Link to={ job.__url }>
                <h2 className={ styles.heading }>{ job.title }</h2>
              </Link>
              <p>{ job.blurb }</p>
            </li>
          ))
        }
    </ul>
  )
}

JobsList.propTypes = {
  jobs: PropTypes.array.isRequired,
}

export default JobsList

import React, { PropTypes } from "react"
import { Link } from "phenomic"
import styles from "./index.css"

const ProfilesList = ({ profiles }) => {
  return (
    <ul id="#profiles" className={ styles.listContainer }>
        {
          profiles.map((profile) => (
            <li key={ profile.__url } className={ styles.listItem }>
                <Link to="#" onClick={ (e) => { e.preventDefault(); }}>
                  <img src={ profile.thumbnail } />
                  <h5 className={ styles.heading }>{ profile.nickName || profile.firstName }</h5>
                </Link>
            </li>
          ))
        }
    </ul>
  )
}

ProfilesList.propTypes = {
  profiles: PropTypes.array.isRequired,
}

export default ProfilesList

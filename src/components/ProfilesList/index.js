import React, { PropTypes } from "react"


import styles from "./index.css"

const ProfilesList = ({ profiles }) => {
  return (
    <ul id="#profiles" className={ styles.listContainer }>
        {
          profiles.map((profile) => (
            <li key={ profile.__url } className={ styles.listItem }>
                <a href="#profiles">
                <img src={ profile.thumbnail } />
                <h5 className={ styles.heading }>{ profile.nickName || profile.firstName }</h5>
                </a>
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

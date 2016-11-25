import React, { PropTypes } from "react"

import Page from "../Page"

const Profile = (props) => {
  return (
    <Page
      { ...props }
    />
  )
}

Profile.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Profile

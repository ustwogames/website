import React, { PropTypes } from "react"

import Page from "../Page"

const Profile = (props) => {
  const nickName = props.head.nickName ? `${props.head.nickName} – ` : '';
  const displayName = `${nickName}${props.head.firstName} ${props.head.lastName}`;
  let pageProps = {...props};
  pageProps.head.bodyTitle = displayName;

  return (
    <Page
      { ...pageProps }

    />
  )
}

Profile.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Profile

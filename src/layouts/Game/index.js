import React, { PropTypes } from "react"

import Page from "../Page"

const Game = (props) => {
  return (
    <Page
      { ...props }
    />
  )
}

Game.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Game

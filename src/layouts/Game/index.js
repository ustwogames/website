import React, { PropTypes } from "react"

import Page from "../Page"

const Game = (props) => {
  const mergedProps = {
    ...props,
    displayChildrenFirst: true
  }

  return (
    <Page
      { ...mergedProps }
    >
      <img src={props.head.cover} />
    </Page>
  )
}

Game.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Game

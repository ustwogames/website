import React, { PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"

const Game = (props) => {
  const mergedProps = {
    ...props,
    displayChildrenFirst: true
  }

  return (
    <Page
      { ...mergedProps }
    >
      <video className={ styles.cover_video } src={props.head.video} autoPlay loop muted playsInline></video>
    </Page>
  )
}

Game.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Game

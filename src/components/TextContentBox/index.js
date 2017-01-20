import React, { PropTypes } from "react"

import styles from "./index.css"

const TextContentBox = ({ children, title }) => {
  return (
    <div className={ styles.box }>
      <h2>{ title }</h2>
      { children }
    </div>
  )
}

TextContentBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
}

export default TextContentBox

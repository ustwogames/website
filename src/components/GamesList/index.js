import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <ul className={ styles.listContainer}>
        {
          games.map((game) => (
            <li key={ game.__url } className={ styles.listItem }>
              <Link to={ game.__url }>
                <img src={ game.icon } />
                <h2 className={ styles.heading }>{ game.name }</h2>
              </Link>
              <p>{ game.blurb }</p>
            </li>
          ))
        }
    </ul>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
}

export default GamesList

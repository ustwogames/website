import React, { PropTypes } from "react"

import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <div>
      <ul>
        {
          games.map((game) => (
            <li key={ game.title } className={ styles.listItem } >
              <a href={ game.__url } className={ styles.listContainer }>
                <img src={ game.cover } />
                <span>{ game.name }</span>
                <p>{ game.description }</p>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
}

export default GamesList

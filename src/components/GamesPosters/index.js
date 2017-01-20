import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const GamesPosters = ({ games }) => {
  return (
    <ul className={ styles.listContainer }>
        {
          games.map((game) => (
            <li key={ game.__url } className={ styles.listItem }>
              <Link to={ game.__url }>
                {
                  game.background &&
                  <img src={ game.background } />
                }
                {
                  game.logo
                  ? <div className={ styles.gameLogo }>
                      <img src={ game.logo } alt={ game.title } className={ styles.logo }/>
                    </div>
                  : <div className={ styles.gameLogo }>
                      <h2 className={ styles.heading }>{ game.title }</h2>
                    </div>
                }
              </Link>
            </li>
          ))
        }
    </ul>
  )
}

GamesPosters.propTypes = {
  games: PropTypes.array.isRequired,
}

export default GamesPosters

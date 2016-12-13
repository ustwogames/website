import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"
import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <ul className={ styles.listContainer }>
        {
          games.map((game) => (
            <li key={ game.__url } className={ styles.listItem }>
              {
                game.background &&
                <div className={ styles.heroBackground }>
                  <img src={ game.background} />
                </div>
              }


              <div className={ styles.wrapper }>
                <Link to={ game.__url }>
                  {
                    game.icon &&
                    <img src={ game.icon } className={styles.icon} />
                  }
                  {
                    game.logolight && game.logodark
                    ? <div>
                        <img key="logolight" src={ game.logolight } alt={ game.title } className={ styles.logolight }/>
                        <img key="logodark" src={ game.logodark } alt={ game.title } className={ styles.logodark }/>
                      </div>
                    : <h2 className={ styles.heading }>{ game.title }</h2>
                  }
                  {
                    game.blurb &&
                    <p className={ styles.blurb }>{ game.blurb }</p>
                  }
                  <Button className={ styles.cta }>
                    { `More about ${game.name}` }
                  </Button>
                </Link>
              </div>

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

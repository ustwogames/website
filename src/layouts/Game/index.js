import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Page from "../Page"
import styles from "./index.css"

const STORE_BADGES = {
  apple: {
    image: "/assets/store-badge-apple.svg"
  },
  google: {
    image: "/assets/store-badge-google.png"
  },
  microsoft: {
    image: "/assets/store-badge-microsoft.png"
  },
  amazon: {
    image: "/assets/store-badge-amazon.svg"
  }
}

const Game = (props) => {
  return (
    <Page
      { ...props }
      displayChildrenFirst hideMailingList
    >
      <ul className={ styles.listContainer }>
        {
          props.head.stores &&
          props.head.stores.map((store) => (
            <li key={ store.url } className={ styles.listItem }>
              <Link to={ store.url }>
                <img src={ STORE_BADGES[store.type].image } alt={ `Buy ${props.head.name} in ${store.type} store` } />
              </Link>
              {
                store.label &&
                <span>{ store.label }</span>
              }
            </li>
          ))
        }
      </ul>
    </Page>
  )
}

Game.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Game

import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import GamesPosters from "../../components/GamesPosters"

import styles from "./index.css"

const Homepage = (props, { collection }) => {
  const featuredGames = enhanceCollection(collection, {
    filter: ({ layout, promoted }) => layout === "Game" && promoted === true,
    sort: "date",
    reverse: true,
  });
  const restOfGames = enhanceCollection(collection, {
    filter: ({ layout, promoted }) => layout === "Game" && promoted !== true,
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <h5 className={ styles.centredTitle }>Our recent games</h5>
      <GamesPosters games={ featuredGames } />
      <h5 className={ styles.centredTitle }>Our other titles</h5>
      <GamesPosters games={ restOfGames } />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage

import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import GamesList from "../../components/GamesList"

const Game = (props, { collection }) => {
  const games = enhanceCollection(collection, {
    filter: { layout: "Game" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <h2>{ "These are our games" }</h2>
      <GamesList games={ games } />
    </Page>
  )
}

Game.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Game

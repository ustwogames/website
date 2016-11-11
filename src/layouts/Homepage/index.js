import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import GamesList from "../../components/GamesList"

const Homepage = (props, { collection }) => {
  const featuredGame = enhanceCollection(collection, {
    filter: ({ layout, promoted }) => layout === "Game" && promoted,
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <h2>{ "Featured game" }</h2>
      <GamesList games={ featuredGame } />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage

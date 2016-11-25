import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import ProfilesList from "../../components/ProfilesList"

const Game = (props, { collection }) => {
  const profiles = enhanceCollection(collection, {
    filter: { layout: "Profile" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <ProfilesList profiles={ profiles } />
    </Page>
  )
}

Game.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Game

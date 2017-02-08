import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import GamesPosters from "../../components/GamesPosters"

// import styles from "./index.css"

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
      <GamesPosters games={ featuredGames } mainTitles />
      <GamesPosters games={ restOfGames } />
      <div className="homepage-additional">
        <h2>We're proud to be a part of the <a href="http://www.ustwo.com">ustwo</a> family.</h2>
        <p><a href="http://www.ustwo.com"><img src="/assets/ustwo-logo.svg" alt="ustwo logo" className="homepage-ustwo-logo" /></a></p>
      </div>
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage

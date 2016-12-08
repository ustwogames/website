import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import GamesIndex from "./layouts/GamesIndex"
import Game from "./layouts/Game"
import Support from "./layouts/Support"
import Contact from "./layouts/Contact"
import Profile from "./layouts/Profile"
import About from "./layouts/About"
import JobsIndex from "./layouts/JobsIndex"
import Job from "./layouts/Job"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      GamesIndex,
      Game,
      Support,
      Contact,
      Profile,
      About,
      JobsIndex,
      Job
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)

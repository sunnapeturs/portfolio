import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preview from "./Preview";
import Help from "./Help";
import NotFound from "./NotFound";
import Page from "./Page";
import About from "./About/About";
import Frontpage from "./Frontpage/Frontpage";
import ProjectPage from "./ProjectPage/ProjectPage";
import "./App.scss";

const App = props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/help" component={Help} />
      <Route
        exact
        path="/about"
        render={routeProps => (
          <About {...routeProps} prismicCtx={props.prismicCtx} />
        )}
      />
      <Route
        exact
        path="/:uid"
        render={routeProps => (
          <ProjectPage {...routeProps} prismicCtx={props.prismicCtx} />
        )}
      />
      <Route
        exact
        path="/preview"
        render={routeProps => (
          <Preview {...routeProps} prismicCtx={props.prismicCtx} />
        )}
      />
      <Route
        exact
        path="/page/:uid"
        render={routeProps => (
          <Page {...routeProps} prismicCtx={props.prismicCtx} />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ContextProvider } from "./components/synergy/synergy";

import Layout from "./components/layout/index";
import Posts from "./components/posts/index";
import PostDetails from "./components/post-details/index";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/posts/">
              <Posts />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetails />
            </Route>
            <Route exact path="/users/">
              <h1>Users</h1>
            </Route>
            <Route exact path="/users/:id">
              <h1>User Details</h1>
            </Route>
            <Redirect from="/" to="posts" />
          </Switch>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
}

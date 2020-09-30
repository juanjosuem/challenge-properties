import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AppContextProvider } from "./contexts/appContext";
import TableView from "./components/views/TableView/TableView";
import GridView from "./components/views/GridView/GridView";
import Navbar from "./components/common/Navbar";
import DetailView from "./components/views/DetailView/DetailView";

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppContextProvider>
          <Navbar />
          <div style={{ marginTop: 20 }}>
            <Switch>
              <Route path="/list">
                <TableView />
              </Route>
              <Route path="/grid">
                <GridView />
              </Route>
              <Route path="/detail/:id">
                <DetailView />
              </Route>
              <Route path="*">
                <Redirect to="/list" />
              </Route>
            </Switch>
          </div>
        </AppContextProvider>
      </Router>
    );
  }
}

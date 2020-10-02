import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AppContextProvider } from "./contexts/appContext";
import TableView from "./components/views/TableView/TableView";
import GridView from "./components/views/GridView/GridView";
import DetailView from "./components/views/DetailView/DetailView";
import Toolbar from "./components/common/Toolbar";

const container = {
  /* background: "#7a7a7a",
  padding: "30px 0",*/
  marginTop: 16,
};

const App = () => (
  <AppContextProvider>
    <Router>
      <Toolbar />
      <div style={container}>
        <Switch>
          <Route exact path="/list" component={TableView} />
          <Route exact path="/grid" component={GridView} />
          <Route exact path="/detail/:id" component={DetailView} />
          <Route path="*">
            <Redirect to="/list" />
          </Route>
        </Switch>
      </div>
    </Router>
  </AppContextProvider>
);

export default App;

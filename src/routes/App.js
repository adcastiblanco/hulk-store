import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components";
import AppContext from "../context/AppContext";
import { Checkout, Dashboard, Kardex, Success } from "../pages";

import UseInitialState from "../hooks/UseInitialState";

function App() {
  const initialState = UseInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/kardex" component={Kardex} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/success" component={Success} />
            <Route component={Dashboard} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

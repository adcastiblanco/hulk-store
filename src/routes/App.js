import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Layout } from "../components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Dashboard} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes"
import Layout from "./Component/Layout"
import './index.css'
const App = () => {
  const renderWithLayout = (Component, props) => {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
  return (
    <Router history={History}>
      <Switch>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              render={(props) => renderWithLayout(route.component, props)}
            />
          );
        })}
      </Switch>
    </Router>
  );
};
export default App;

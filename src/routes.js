import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Redirect } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

class PrivateRoute extends React.Component {
  estaAutenticado = () => {
    if (localStorage.getItem("TOKEN")) {
      return true;
    }
    return false;
  };

  render() {
    const { component: Component, ...props } = this.props;
    if (this.estaAutenticado()) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

class Roteamento extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Roteamento;

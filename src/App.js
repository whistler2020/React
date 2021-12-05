import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch } from "react-router-dom";
import Home from "./views/Home";
import BoardProduit from "./views/BoardProduit";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Login from "./components/Login";
import Loginpage from "./views/Loginpage";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <NavBar />
          <Switch>
            <PublicRoute restricted={false} exact path="/" component={Home} />
            <PublicRoute restricted={false} exact path="/user2" component={BoardProduit} />
            <PublicRoute
              restricted={true}
              component={Login}
              path="/login"
              exact
            />
            <PrivateRoute path="/user" component={Loginpage} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

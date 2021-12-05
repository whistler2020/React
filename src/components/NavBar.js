import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../utils/LogUtils";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: localStorage.getItem("jwt"),
    };
  }

  componentDidUpdate() {
    if (!this.state.isAuth && localStorage.getItem("jwt")) {
      this.setState({
        isAuth: localStorage.getItem("jwt"),
      });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <Link to={"/"} className="nav-link">
              <button> Page d'accueil</button>
            </Link>
          </div>
        {this.state.isAuth ? (
          <div className="navbar-nav ml-auto">
          <a href="/user2" className="nav-link" onClick={logout}>
            <button> se connecter</button>
          </a>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/login">
              <button>Login pour acheter</button>
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default withRouter(NavBar);

import { searchProduit, getProduits } from "../services/ServiceProduit";
import React, { Component } from "react";
import TableProduit from "../components/TableProduit";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produits: [],
      warning: "",
      error: "",
    };
  }

  componentDidMount() {
    this.setState({
      produits: getProduits(),
    });
  }

  resetAlerts = () => {
    this.setState({
      warning: "",
      error: "",
    });
  };

  addProduit = (term) => {
    this.resetAlerts();

    const produit = searchProduit(term);
    if (!produit) {
      this.setState({
        error: `il n'y a plus de ce produit '${term}'`,
      });
    } else if (
      this.state.produits.find((item) => item.name === produit.name)
    ) {
      this.setState({
        warning: `Produit '${term}' est deja dans la liste.`,
      });
    } else {
      this.setState(({ produits }) => ({
        produits: [produit, ...produits],
      }));
    }
  };

  render() {
    const { error, warning, produits } = this.state;
    return (
      <div className="container">
        <h1>Bienvenue sur le site d'achats de produits 
          alimentaires en ligne</h1>
        <TableProduit produits={produits} />
      </div>
    );
  }
}

export default Home;

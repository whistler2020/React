import { searchProduit, getProduits } from "../services/ServiceProduit";
import React, { Component } from "react";
import VenteProduit from "../components/VenteProduit";

class BoardProduit extends Component {
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
        error: `aucun produit trouve '${term}'`,
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
      
        <VenteProduit produits={produits} />
      
    );
  }
}

export default BoardProduit;

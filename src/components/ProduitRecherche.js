import React, { Component } from "react";

class ProduitRecherche extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produitSearch: "",
    };
  }

  onChangeEvent = (event) => {
    const newProduitSearch = event.target.value;
    this.setState({
      produitSearch: newProduitSearch,
    });
  };

  addProduit = () => {
    this.setState(() => ({
      produitSearch: "",
    }));
    this.props.onSearch(this.state.produitSearch);
  };

  render() {
    const { produitSearch } = this.state;
    this.disableSearch = produitSearch.trim() === "";

    return (
      <div>
        <h1>Faites vos achats en toute 
          quietude juste en cliquant sur le produit desire!</h1>
      </div>
    );
  }
}

export default ProduitRecherche;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class VenteProduit extends Component {


  ajout(i) {
    let newProduits = [...this.props.produits];
    newProduits[i].quantite++;
    this.setState({ produits: newProduits });
  }

  deduit(i) {
    let newProduits = [...this.props.produits];
    newProduits[i].quantite--;
    this.setState({ produits: newProduits });
  }
  render() {
    const { produits } = this.props;
    return (
      <div className="languages">
        {produits.map((prod, i) => (
          <div key={i} className="language">
            <div className="imgContainer">
              <img src={prod.Image} alt="" />
            </div>
            <div className="languageName">{prod.name}</div>
          
            <button
              className="btn languageName"
              onClick={this.ajout.bind(this, i)}
            >
              AJ (+)
            </button>

            <button
              className="btn btn-info"
              onClick={this.deduit.bind(this, i)}
            >
              ret(-)
            </button>
            <div className="languageName">{prod.quantite}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(VenteProduit);

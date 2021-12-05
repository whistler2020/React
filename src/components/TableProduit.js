import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DetailProduit from "./DetailProduit";

class TableProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProduitToShow: 0,
    };
  }

  vote(i) {
    let newProduits = [...this.props.produits];
    newProduits[i].quantite++;
    this.setState({ produits: newProduits });
  }

  description(i) {
    this.setState({
      produitToShow: this.props.produits[i],
    });
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
              className="btn btn-info"
              onClick={this.description.bind(this, i)}
            >
              Detail
            </button>
          </div>
        ))}

        {this.state.produitToShow ? (
          <div>
            <DetailProduit detailProduit={this.state.produitToShow} />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default withRouter(TableProduit);

import React from "react";
import { Component } from "react";

class DetailProduit extends Component {
  render() {
    const { detailProduit } = this.props;
    return (
      <div>
        <div className="imgContainer">
          <img
            src={detailProduit.Image}
            alt="language icon"
          />
        </div>
        <h3>{detailProduit.name}</h3>
        <br />
        <div>{detailProduit.desc}</div>
        <br />
        <br />
      </div>
    );
  }
}

export default DetailProduit;

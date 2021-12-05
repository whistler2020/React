import React, { Component } from "react";

function Loginpage(){
    return(
        <div>
            <h1 className=" textform"> Connectez vous!!!</h1>
            <div className="col-6">
            <label className="textform"> Entrer votre nom </label>
            <input
            type="text"
            className="form-control"
            />
          </div>
          <div className="col-6">
            <label className="textform"> Entrer votre nom </label>
            <input
            type="password"
            className="form-control"
            />
          </div>
        </div>
    );
}

export default Loginpage;
/*Componente que monta o Dashboard */

//Imports necessários para o Dashboard funcionar
import React, { Component } from "react";
import "./dashboard.css";

//Classe que monta o componente
class Dashboard extends Component {
  render() {
    return (
      <div className={`dashboard dashboard__${this.props.posicao}`}>
        {this.props.children}
      </div>
    );
  }
}

//Exporta o componente
export default Dashboard;

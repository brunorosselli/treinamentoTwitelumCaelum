/*Componente do Cabeçalho da aplicação */

//Imports necessários para funcionar à aplicação
import React, { Component } from "react";
import "./cabecalho.css";
import "./navMenu.css";

//Classe do cabeçalho
class Cabecalho extends Component {
  render() {
    return (
      <header className="cabecalho">
        <div className="cabecalho__container container">
          <h1 className="cabecalho__logo">
            <a href="">Twitelum</a>
          </h1>
          {this.props.children}
        </div>
      </header>
    );
  }
}

//Exporta à classe do cabeçalho
export default Cabecalho;

/*Componete referente ao Widget */

//Faz os imports necessários para funcionar
import React, { Component } from "react";
import "./widget.css";

//Classe que cria o componente Widget
class Widget extends Component {
  render() {
    return <div className="widget">{this.props.children}</div>;
  }
}

//Exporta o Widget
export default Widget;

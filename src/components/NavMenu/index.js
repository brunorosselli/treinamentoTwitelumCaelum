/*Componente referente ao Menu */

//Imports necessários para o código funcionar
import React, { Component } from "react";
import navMenuStyles from "./navMenu.module.css";

//Classe que cria o menu
class NavMenu extends Component {
  render() {
    return (
      <nav className={navMenuStyles.navMenu}>
        <ul className={navMenuStyles.navMenu__lista}>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link}>
              Bem vindo(a): <br />
              <strong>{this.props.usuario}</strong>
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="">
              Página Inicial
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link}>Hashtags</a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link}>Logout</a>
          </li>
        </ul>
      </nav>
    );
  }
}

//Exporta o Menu
export default NavMenu;

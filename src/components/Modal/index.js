/**Componente referente ao Modal que vai ser aberto ao clicar no texto do Tweet */

//Imports necessários para o código funcionar
import React from "react";
import styles from "./modal.module.css";
import Widget from "../Widget";
import classNames from "classnames";
import PropTypes from "prop-types";

//Exporta e cria o Modal
export const Modal = ({ children, isAberto, onFechando }) => {
  function handleBlackAreaClick(infosDoEvento) {
    const isModalTag = infosDoEvento.target.classList.contains(styles.modal);
    if (isModalTag) onFechando && onFechando();
  }
  return (
    <div
      onClick={handleBlackAreaClick}
      className={classNames(styles.modal, {
        [styles.modalActive]: isAberto,
      })}
    >
      <div>
        <Widget>{isAberto && children()}</Widget>
      </div>
    </div>
  );
};

//Proptypes do Modal
Modal.propTypes = {
  isAberto: PropTypes.bool.isRequired,
  onFechando: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

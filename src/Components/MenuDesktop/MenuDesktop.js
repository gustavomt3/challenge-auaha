import React from 'react';
//Styles
import styles from './MenuDesktop.module.scss';
//Images
import imageNavDesktop from '../../Assets/anel-nav-desktop.png';

const MenuDesktop = () => {
  return (
    <nav className={styles.containerGeralMenuDesktop}>
      <ul className={styles.containerItemsMenu}>
        <li className={styles.liItensNavPrincipal}>
          Anéis
          <ul className={styles.ulPrimeiroNivel}>
            <li className={styles.liPrimeiroNivel}>
              <p>Folheado</p>
              <ul className={styles.ulSegundoNivel}>
                <li>Anel</li>
                <li>Solitária</li>
                <li>Cristal</li>
                <li>Pérola</li>
                <li>Zircônia</li>
              </ul>
            </li>
            <li className={styles.liPrimeiroNivel}>
              <p>Prata</p>
              <ul className={styles.ulSegundoNivel}>
                <li>Anel</li>
                <li>Solitária</li>
                <li>Cristal</li>
                <li>Pérola</li>
                <li>Zircônia</li>
              </ul>
            </li>
            <li className={styles.liPrimeiroNivel}>
              <p>Ouro</p>
              <ul className={styles.ulSegundoNivel}>
                <li>Anel</li>
                <li>Solitária</li>
                <li>Cristal</li>
                <li>Pérola</li>
                <li>Zircônia</li>
              </ul>
            </li>
            <li>
              <img src={imageNavDesktop} alt="Anel com Diamante" />
            </li>
          </ul>
        </li>
        <li>Brincos</li>
        <li>Colares</li>
        <li>Pingentes</li>
        <li>Pulseiras</li>
        <li>Kits</li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;

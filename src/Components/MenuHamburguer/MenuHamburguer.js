import React from 'react';
//Styles
import styles from './MenuHamburguer.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Images
import iconAccount from '../../Assets/icon-login.png';
import iconArrowBottomMenu from '../../Assets/icon-arrow-bottom-menu.svg';

const MenuHamburguer = () => {
  const global = React.useContext(GlobalContext);
  return (
    <nav
      className={`${styles.menu} ${global.active ? `${styles.active}` : ''}`}
    >
      <div
        onClick={global.openMenu}
        className={`${styles.spansHamburguer} ${
          global.active ? `${styles.active}` : ''
        }`}
      >
        <span
          className={`${styles.linha1} ${
            global.active ? `${styles.active}` : ''
          }`}
        ></span>
        <span
          className={`${styles.linha2} ${
            global.active ? `${styles.active}` : ''
          }`}
        ></span>
        <span
          className={`${styles.linha3} ${
            global.active ? `${styles.active}` : ''
          }`}
        ></span>
      </div>
      <img
        className={`${styles.iconMenu} ${
          global.active ? `${styles.active}` : ''
        }`}
        src={iconAccount}
        alt="Icon Account"
      />
      <ul
        className={`${styles.ulMenu} ${
          global.active ? `${styles.active}` : ''
        }`}
      >
        <li
          id="aneis"
          onClick={() => {
            const liSubMenu = document.querySelector('#aneis');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
            liSubMenu?.lastChild.classList.toggle(`${styles.active}`);
            liSubMenu?.firstChild.classList.toggle(`${styles.active}`);
          }}
        >
          <div>
            {' '}
            <p>Anéis</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
          <ul>
            <li>Folheado</li>
            <li>Prata</li>
            <li>Ouro</li>
          </ul>
        </li>
        <li
          id="brincos"
          onClick={() => {
            const liSubMenu = document.querySelector('#brincos');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
          }}
        >
          <div>
            <p>Brincos</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
        </li>
        <li
          id="colares"
          onClick={() => {
            const liSubMenu = document.querySelector('#colares');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
          }}
        >
          <div>
            {' '}
            <p>Colares</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
        </li>
        <li
          id="pingentes"
          onClick={() => {
            const liSubMenu = document.querySelector('#pingentes');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
          }}
        >
          <div>
            {' '}
            <p>Pigentes</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
        </li>
        <li
          id="pulseiras"
          onClick={() => {
            const liSubMenu = document.querySelector('#pulseiras');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
          }}
        >
          <div>
            {' '}
            <p>Pliseiras</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
        </li>
        <li
          id="kits"
          onClick={() => {
            const liSubMenu = document.querySelector('#kits');
            liSubMenu?.firstChild.lastChild.classList.toggle(
              `${styles.active}`,
            );
          }}
        >
          <div>
            {' '}
            <p>Kits</p>
            <img src={iconArrowBottomMenu} alt="Icon Arrow Bottom Menu" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MenuHamburguer;

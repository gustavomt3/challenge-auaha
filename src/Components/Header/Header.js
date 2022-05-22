//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Images
import iconAccount from '../../Assets/icon-login.png';
import iconArrowBottomMenu from '../../Assets/icon-arrow-bottom-menu.svg';

const Header = () => {
  const [active, setActive] = React.useState(false);

  function openMenu() {
    setActive((active) => !active);
    document.body.classList.toggle(`${styles.active}`);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerMobile}>
        <nav className={styles.menu}>
          <div
            onClick={openMenu}
            className={`${styles.spansHamburguer} ${
              active ? `${styles.active}` : ''
            }`}
          >
            <span
              className={`${styles.linha1} ${active ? `${styles.active}` : ''}`}
            ></span>
            <span
              className={`${styles.linha2} ${active ? `${styles.active}` : ''}`}
            ></span>
            <span
              className={`${styles.linha3} ${active ? `${styles.active}` : ''}`}
            ></span>
          </div>
          <img
            className={`${styles.iconMenu} ${active ? `${styles.active}` : ''}`}
            src={iconAccount}
            alt="Icon Account"
          />
          <ul
            className={`${styles.ulMenu} ${active ? `${styles.active}` : ''}`}
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
      </div>
    </header>
  );
};

export default Header;

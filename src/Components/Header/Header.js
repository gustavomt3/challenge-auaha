//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Images
import iconAccount from '../../Assets/icon-login.png';
import iconArrowBottomMenu from '../../Assets/icon-arrow-bottom-menu.svg';
import logo from '../../Assets/logo.svg';
import iconCart from '../../Assets/icon-cart.svg';
import iconSearch from '../../Assets/icon-search.svg';
import anelSearch from '../../Assets/anel-search.png';
import brincoSearch from '../../Assets/brinco-search.png';

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  function openMenu() {
    setActive((active) => !active);
    document.body.classList.toggle(`${styles.active}`);
  }

  function openCart() {
    setCart((cart) => !cart);
  }

  function clickSearch() {
    setSearch((search) => !search);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerMobile}>
        <div className={styles.elementsMobile}>
          <nav className={`${styles.menu} ${active ? `${styles.active}` : ''}`}>
            <div
              onClick={openMenu}
              className={`${styles.spansHamburguer} ${
                active ? `${styles.active}` : ''
              }`}
            >
              <span
                className={`${styles.linha1} ${
                  active ? `${styles.active}` : ''
                }`}
              ></span>
              <span
                className={`${styles.linha2} ${
                  active ? `${styles.active}` : ''
                }`}
              ></span>
              <span
                className={`${styles.linha3} ${
                  active ? `${styles.active}` : ''
                }`}
              ></span>
            </div>
            <img
              className={`${styles.iconMenu} ${
                active ? `${styles.active}` : ''
              }`}
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
          <img
            src={logo}
            alt="Logo Auaha"
            className={`${styles.logo} ${active ? `${styles.active}` : ''}`}
          />
          <div
            className={`${styles.containerCart} ${
              active ? `${styles.active}` : ''
            }`}
            onClick={openCart}
          >
            <div className={styles.divCart}>
              <img src={iconCart} alt="Icon Cart" className={styles.iconCart} />
              <span className={styles.numberCart}>0</span>
            </div>
            <div
              className={`${styles.containerPopUpCart} ${
                cart ? `${styles.active}` : ''
              }`}
            >
              <div></div>
              <div className={styles.footerPopUpCart}>
                <p className={styles.textPopUpCart}>
                  Subtotal <span>R$ 0,00</span>
                </p>
                <div className={styles.buttonPopUpCart}>
                  <p>Finalizar compra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerSearch}>
          <div className={styles.divInput}>
            <input
              className={`${styles.inputSearch} ${
                search ? `${styles.active}` : ''
              }`}
              placeholder="O que deseja encontrar?"
              onClick={clickSearch}
            />
            <div
              className={`${styles.iconSearch} ${
                search ? `${styles.active}` : ''
              }`}
            >
              <img src={iconSearch} alt="Icon Search" />
            </div>
          </div>
          <div
            className={`${styles.containerElementsSearch} ${
              search ? `${styles.active}` : ''
            }`}
          >
            <p>Sugestões</p>
            <div className={styles.subCategoriesSearch}>
              <p>Brinco</p>
              <p>Brinco Prata</p>
              <p>Brinco Ouro</p>
            </div>
            <div className={styles.contaierProductsSearch}>
              <div className={styles.productsSearch}>
                <img src={anelSearch} alt="Anel Search" />
                <p>anel banhado ouro reto com zirconia</p>
              </div>
              <div className={styles.productsSearch}>
                <img src={brincoSearch} alt="Brinco Search" />
                <p>brinco de ouro brancho com diamantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

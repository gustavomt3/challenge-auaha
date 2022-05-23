//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Context
import { GlobalContext } from '../GlobalContext';
//SubComponents
import Cart from './Subcomponents/Cart';
import MenuHamburguer from './Subcomponents/MenuHamburguer';
import Search from './Subcomponents/Search';
//Images
import logo from '../../Assets/logo.svg';

const Header = () => {
  const global = React.useContext(GlobalContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerMobile}>
        <div className={styles.elementsMobile}>
          <MenuHamburguer />
          <img
            src={logo}
            alt="Logo Auaha"
            className={`${styles.logo} ${
              global.active ? `${styles.active}` : ''
            }`}
          />
          <Cart />
        </div>
        <Search />
      </div>

      <div className={styles.headerDesktop}>
        <div className={`${styles.container} ${styles.containerDesktop}`}>
          <Search />
          <img
            src={logo}
            alt="Logo Auaha"
            className={`${styles.logo} ${
              global.active ? `${styles.active}` : ''
            }`}
          />
          <div className={styles.containerItemsMenu}>
            <div style={styles.containerMyAccount}></div>
            {/* <div style={styles.containerNumber}></div>
            <div style={styles.containerCart}></div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

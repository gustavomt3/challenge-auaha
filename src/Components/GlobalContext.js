import React from 'react';
//Styles
import styles from '../Components/Header/Header.module.scss';

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
  const [active, setActive] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  function openMenu() {
    setActive((active) => !active);
    document.body.classList.toggle(`${styles.active}`);
  }

  function openSearch() {
    setSearch((search) => !search);
  }

  function openCart() {
    setCart((cart) => !cart);
  }
  return (
    <GlobalContext.Provider
      value={{ openMenu, openSearch, active, search, cart, openCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

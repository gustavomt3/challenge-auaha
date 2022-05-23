import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Styles
import styles from './Cart.module.scss';
//Images
import iconCart from '../../Assets/icon-cart.svg';

const Cart = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div
      className={`${styles.containerCart} ${
        global.active ? `${styles.active}` : ''
      }`}
      onClick={global.openCart}
    >
      <div className={styles.divCart}>
        <img src={iconCart} alt="Icon Cart" className={styles.iconCart} />
        <span className={styles.numberCart}>0</span>
      </div>
      <div
        className={`${styles.containerPopUpCart} ${
          global.cart ? `${styles.active}` : ''
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
  );
};

export default Cart;

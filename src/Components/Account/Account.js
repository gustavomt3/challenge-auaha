import React from 'react';
//Styles
import styles from './Account.module.scss';
//Images
import iconLogin from '../../Assets/icon-login.png';
import iconLoginCinza from '../../Assets/icon-login-cinza.svg';

const Account = () => {
  return (
    <div className={styles.containerMyAccount}>
      <div className={styles.divAccount}>
        <img src={iconLogin} alt="Icon Login" className={styles.iconLogin} />
        <img
          src={iconLoginCinza}
          alt="Icon Login"
          className={styles.iconLoginCinza}
        />
        <p className={styles.textAccount}>Minha Conta</p>
      </div>
      <div className={styles.elementsAccount}>
        <div className={styles.first}>
          <p>Entrar</p>
          <p>Cadastrar</p>
        </div>
        <div className={styles.last}>
          <p>Meus Pedidos</p>
          <p>Minha Conta</p>
        </div>
      </div>
    </div>
  );
};

export default Account;

import React from 'react';
//Components
import BannerMain from '../BannerMain/BannerMain';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.containerMain}>
      <BannerMain />
    </main>
  );
};

export default Main;

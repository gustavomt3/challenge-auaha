import React from 'react';
//Components
import BannerMain from '../BannerMain/BannerMain';
import Tipbar from '../Tipbar/Tipbar';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.containerMain}>
      <BannerMain />
      <Tipbar />
    </main>
  );
};

export default Main;

import React from 'react';
//Styles
import styles from './Search.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Images
import iconSearch from '../../Assets/icon-search.svg';
import anelSearch from '../../Assets/anel-search.png';
import brincoSearch from '../../Assets/brinco-search.png';

const Search = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div className={styles.containerSearch}>
      <div className={styles.divInput}>
        <input
          className={styles.inputSearch}
          placeholder="O que deseja encontrar?"
          onClick={global.openSearch}
        />
        <div className={styles.iconSearch}>
          <img src={iconSearch} alt="Icon Search" />
        </div>
      </div>
      <div
        className={`${styles.containerElementsSearch} ${
          global.search ? `${styles.active}` : ''
        }`}
      >
        <p className={styles.titleElementsSearch}>Sugestões</p>
        <div className={styles.subCategoriesSearch}>
          <p>Brinco</p>
          <p>Brinco Prata</p>
          <p>Brinco Ouro</p>
        </div>
        <div className={styles.containerProductsSearch}>
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
  );
};

export default Search;

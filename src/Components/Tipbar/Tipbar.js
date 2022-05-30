import React from 'react';
//Components
import Slider from '../Slider/Slider';
//Styles
import './Tipbar.scss';
//Imagens
import iconCaixa from '../../Assets/icon-caixa.svg';
import iconCredcard from '../../Assets/icon-credcard.svg';

const Tipbar = () => {
  return (
    <section className="containerTipbar">
      <div className="divMobile">
        <Slider classContainer="glide2" optionsGlide={{ autoplay: 5000 }}>
          <li className="glide__slide">
            <img src={iconCaixa} alt="Imagem Banner" />
            <p>
              <span>Frete grátis</span> nas compras acima de R$ 299,00
            </p>
          </li>
          <li className="glide__slide">
            <img src={iconCredcard} alt="Imagem Banner" />
            <p>
              <span>6 vezes sem juros</span> no cartão de crédito
            </p>
          </li>
        </Slider>
      </div>
      <div className="divDesktop">
        <div className="div-tipbar">
          <img src={iconCaixa} alt="Imagem Banner" />
          <p>
            <span>Frete grátis</span> nas compras acima de R$ 299,00
          </p>
        </div>
        <div className="div-tipbar">
          <img src={iconCredcard} alt="Imagem Banner" />
          <p>
            <span>6 vezes sem juros</span> no cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tipbar;

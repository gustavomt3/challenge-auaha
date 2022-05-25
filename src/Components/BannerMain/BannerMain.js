import React from 'react';
import Slider from '../Slider/Slider';
//Images
import ImageBanner from '../../Assets/image-banner.png';

const BannerMain = () => {
  // const numberList = document.querySelectorAll('.glide__slide').map((item) => {
  //   return item.length;
  // });

  return (
    <>
      {' '}
      <Slider statusArrow={true} statusDot={true}>
        <li className="glide__slide">
          <img src={ImageBanner} alt="Imagem Banner" />
        </li>
        <li className="glide__slide">
          <img src={ImageBanner} alt="Imagem Banner" />
        </li>
        <li className="glide__slide">
          <img src={ImageBanner} alt="Imagem Banner" />
        </li>
      </Slider>
    </>
  );
};

export default BannerMain;

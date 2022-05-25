import React from 'react';
//Components
import Slider from '../Slider/Slider';
//Data Request
import { dataImagesBanner } from '../../DataRequest/ImagesBanner';

const BannerMain = () => {
  const liImages = dataImagesBanner.map((images, index) => (
    <li className="glide__slide" key={index}>
      <img src={images.ImageBanner} alt="Imagem Banner" />
    </li>
  ));

  const [dimensions, setDimensions] = React.useState(null);

  React.useEffect(() => {
    function handleResize() {
      if (window.screen.width < 1315) {
        setDimensions(false);
      } else {
        setDimensions(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      {' '}
      <Slider
        statusArrow={dimensions}
        statusDot={true}
        numberList={liImages.length}
      >
        {liImages}
      </Slider>
    </>
  );
};

export default BannerMain;

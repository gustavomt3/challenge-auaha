import React from 'react';
//Components
import Slider from '../Slider/Slider';
//Data Request
import { dataImagesBanner } from '../../DataRequest/ImagesBanner';

const BannerMain = () => {
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
        numberList={dataImagesBanner.length}
      >
        {dataImagesBanner.map((images, index) => (
          <li className="glide__slide" key={index}>
            <img src={images} alt="Imagem Banner" />
          </li>
        ))}
      </Slider>
    </>
  );
};

export default BannerMain;

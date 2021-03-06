import React from 'react';
import Glide from '@glidejs/glide';
//Styles
import './glide.scss';
//Images
import ArrowRight from '../../Assets/arrow-right.svg';
import ArrowLeft from '../../Assets/arrow-left.svg';

const Slider = ({
  classContainer,
  children,
  optionsGlide,
  statusDot,
  statusArrow,
  numberList,
}) => {
  React.useEffect(() => {
    const mainGlide = new Glide(`.${classContainer}`, optionsGlide);
    return () => mainGlide.mount();
  });

  let dot = statusDot;
  let arrow = statusArrow;

  let loopDots = [];
  for (let i = 0; i < numberList; i++) {
    loopDots.push(
      <button
        key={i}
        className="glide__bullet"
        data-glide-dir={`=${i}`}
      ></button>,
    );
  }

  return (
    <>
      <div className={`glide ${classContainer}`}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">{children}</ul>
        </div>
        {arrow ? (
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <img src={ArrowLeft} alt="Icon Arrow Left" />
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <img src={ArrowRight} alt="Icon Arrow Right" />
            </button>
          </div>
        ) : null}
        {dot ? (
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {loopDots}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Slider;

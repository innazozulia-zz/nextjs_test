import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

import style from "../styles/sliderFooter.module.css";

const SliderFooter = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={style.next__arrow}>
        <HiOutlineChevronRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={style.prev__arrow}>
        <HiOutlineChevronLeft />
      </div>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      //   {
      //     breakpoint: 1100,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 400,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    <div className={style.slider__container}>
      <Slider {...settings}>
        {/* <div className={style.slider}> */}
        {/* <div className={style.slider__item}> */}
        <img className={style.img} src="slider/item-1.png" />
        <div className={style.slider__text}>
          <h3 className={style.slider__title}>Save water</h3>
          <p className={style.description}>
            Taking on the issue of ensuring access to safe water requires
            workdwide effort.
          </p>
        </div>
        <img className={style.img} src="slider/item-2.png" />
        <div className={style.slider__text}>
          <h3 className={style.slider__title}>Plant tree</h3>
        </div>
        <img className={style.img} src="slider/item-3.png" />
        <div className={style.slider__text}>
          <h3 className={style.slider__title}>Choose organic</h3>
        </div>
      </Slider>
    </div>
  );
};
export default SliderFooter;

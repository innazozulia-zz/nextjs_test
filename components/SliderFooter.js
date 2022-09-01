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
    centerMode: true,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    //   setState(state + 1);
    // },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    // },

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1185,
        settings: {
          initialSlide: 0,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={style.slider__container}>
      <Slider {...settings} state={state}>
        <div className={style.slider__item}>
          <img className={style.img} src="slider/slider-1.png" alt="slider" />
          <img className={style.img__bg} src="slider/bg.png" alt="background" />
          <div className={style.slider__text_one}>
            <h5>Save watter</h5>
            <p>
              Taking on the issue of ensuring access to safe water requires
              workdwide effort.
            </p>
          </div>
        </div>
        <div className={style.slider__item}>
          <div className={style.slider__item_two}>
            <img
              className={style.img_slider_two}
              src="slider/slider-2.png"
              alt="slider"
            />
            <div className={style.slider__text_two}>
              <h5>Plant trees</h5>
            </div>
          </div>
        </div>
        <div className={style.slider__item}>
          <img
            className={style.img_slider__three}
            src="slider/slider-3.png"
            alt="slider"
          />
          <div className={style.slider__text_three}>
            <h5>Save energy</h5>
          </div>
        </div>
        <div className={style.slider__item}>
          <img
            className={style.img_slider__four}
            src="slider/slider-4.png"
            alt="slider"
          />
          <div className={style.slider__text_four}>
            <h5>Avoid plastic</h5>
          </div>
        </div>
        <div className={style.slider__item}>
          <img
            className={style.img_slider__five}
            src="slider/slider-5.png"
            alt="slider"
          />
          <div className={style.slider__text_five}>
            <h5>Choose organic</h5>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default SliderFooter;

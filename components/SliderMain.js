import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

import style from "../styles/sliderFirst.module.css";

const SliderMain = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={style.slider__container}>
      <Slider {...settings}>
        <div className={style.slider__item_one}>
          <div className={style.slider}>
            <div className={style.slider__content}>
              <h3> Travel In Japan: The True Experience</h3>
              <p>
                When pattern is mentioned in interior design, it is easy to
                asso- ciate it with a geometric patterned wallpaper or colourful
                prints on interior fabrics.
              </p>
            </div>
            <div className={style.slider__cover}>
              <img className={style.cover} src="sliderOne/slider_cover.png" />
              <img className={style.shadow} src="sliderOne/slider_shadow.png" />
            </div>
          </div>
        </div>
        <div className={style.slider__item_two}>
          <div className={style.slider}>
            <div className={style.slider__content}>
              <h3>Helping Wild Turtles To Travel In Japan</h3>
              <p>
                The scale of the challenges facing our planet can seem daunting,
                but we can all do something. Challenges facing our planet can
                seem daunting, but we can all do something.
              </p>
            </div>
            <div className={style.slider__cover}>
              <img className={style.cover} src="sliderOne/slider_cover.png" />
              <img className={style.shadow} src="sliderOne/slider_shadow.png" />
            </div>
          </div>
        </div>
        <div className={style.slider__item_three}>
          <div className={style.slider}>
            <div className={style.slider__content}>
              <h3>Threats of Modern Indusrial World </h3>
              <p>
                The scale of the challenges facing our planet can seem daunting,
                but we can all do something. Easy to asso- ciate it with a
                geometric patterned wallpaper.
              </p>
            </div>
            <div className={style.slider__cover}>
              <img className={style.cover} src="sliderOne/slider_cover.png" />
              <img className={style.shadow} src="sliderOne/slider_shadow.png" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;

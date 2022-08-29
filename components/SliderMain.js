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
    // autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      //   {
      //     breakpoint: 620,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.slider__container}>
      <Slider {...settings}>
        <div className={style.slider__item}>
          <img src="connect/item-1.jpg" />
        </div>
        <div>
          <img src="connect/item-2.jpg" />
        </div>
        <div>
          <img src="connect/item-3.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;

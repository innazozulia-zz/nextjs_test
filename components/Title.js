import React from "react";

import style from "../styles/title.module.css";

const Title = () => {
  return (
    <div className={style.container}>
      <div className={style.relative__desktop}>
        <h5 className={style.title}>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </h5>
      </div>
      <div className={style.assets__desktop}>
        <div className={style.assets__wrapper}>
          <div className={style.assets__item}>
            <img src="titleComponent/icon-1.png" alt="assets value composer" />
            <p className={style.assets__text}>assets value composer</p>
          </div>
          <div className={style.assets__item}>
            <img src="titleComponent/icon-2.png" alt="graph budget analyzer" />
            <p className={style.assets__text}>graph budget analyzer</p>
          </div>
          <div className={style.assets__item}>
            <img src="titleComponent/icon-3.png" alt="monthly avg revenue" />
            <p className={style.assets__text}>monthly avg revenue</p>
          </div>
        </div>
      </div>
      <div className={style.relative__mobile}>
        <div className={style.mobile__wrapper}>
          <img
            className={style.left_one__modile}
            src="titleComponent/left__mobile-1.png"
          />
          <img
            className={style.left_two__modile}
            src="titleComponent/left__mobile-2.png"
          />
          <h3 className={style.title__mobile}>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </h3>
          <img
            className={style.elipce__mobile}
            src="titleComponent/ellipse__mobile.png"
          />
          <img
            className={style.right_one__mobile}
            src="titleComponent/right__mobile-1.png"
          />
          <img
            className={style.right_two__mobile}
            src="titleComponent/right__mobile-2.png"
          />
        </div>
      </div>
      <div className={style.assets__mobile}>
        <div className={style.assets__item__mobile}>
          <img src="titleComponent/icon-1.png" alt="assets value composer" />
          <p className={style.assets__text}>assets value composer</p>
        </div>
        <div className={style.assets__item__mobile}>
          <img src="titleComponent/icon-2.png" alt="graph budget analyzer" />
          <p className={style.assets__text}>graph budget analyzer</p>
        </div>
        <div className={style.assets__item__mobile}>
          <img src="titleComponent/icon-3.png" alt="monthly avg revenue" />
          <p className={style.assets__text}>monthly avg revenue</p>
        </div>
      </div>
    </div>
  );
};
export default Title;

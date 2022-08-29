import React from "react";

import style from "../styles/title.module.css";

const Title = () => {
  return (
    <div className={style.container}>
      <div className={style.relative}>
        <img className={style.ellipce} src="titleComponent/Ellipse.png" />

        <img className={style.right_one} src="titleComponent/right-1.png" />
        <img className={style.right_two} src="titleComponent/right-2.png" />
        <img className={style.right_three} src="titleComponent/right-3.png" />
        <img className={style.left_one} src="titleComponent/left-1.png" />
        <img className={style.left_two} src="titleComponent/left-2.png" />
        <img className={style.left_three} src="titleComponent/left-3.png" />
        <h5>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </h5>
      </div>
      <div className={style.assets}>
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
    </div>
  );
};
export default Title;

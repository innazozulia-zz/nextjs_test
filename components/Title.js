import React from "react";

import style from "../styles/title.module.css";

const Title = () => {
  return (
    <div className={style.container}>
      <h5>
        The scale of the challenges facing our planet seem daunting, but we can
        all do something.
      </h5>
      <div className={style.assets}>
        <div className={style.assets__item}>
          <img src="" alt="assets value composer" />
          <p className={style.assets__text}>assets value composer</p>
        </div>
        <div className={style.assets__item}>
          <img src="" alt="graph budget analyzer" />
          <p className={style.assets__text}>graph budget analyzer</p>
        </div>
        <div className={style.assets__item}>
          <img src="" alt="monthly avg revenue" />
          <p className={style.assets__text}>monthly avg revenue</p>
        </div>
      </div>
    </div>
  );
};
export default Title;

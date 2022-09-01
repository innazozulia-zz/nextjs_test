import React from "react";

import style from "../styles/animated.module.css";

const Animated = () => {
  return (
    <div className={style.frame}>
      <div className={style.human}>
        <div className={style.face}></div>
        <div className={style.hands}>
          <div className={style.hand__left}>
            <div className={style.hand}></div>
          </div>
          <div className={style.hand__right}>
            <div className={style.hand}></div>
          </div>
        </div>
        <div className={style.body}></div>
        <div className={style.bottom}>
          <div className={style.left__left}></div>
          <div className={style.left__right}></div>
        </div>
        <p className={style.text}>Join our team. We can all to do something.</p>
      </div>
    </div>
  );
};

export default Animated;

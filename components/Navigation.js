import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import style from "../styles/navigation.module.css";
import Animated from "./Animated";

const Navigation = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);
  return (
    <div className={style.navigation__container}>
      <div
        onClick={() => setAnimation(!animation)}
        className={style.navigation}
      >
        <img src="media/logo.png" atl="logo" />
      </div>
      <div
        className={navbar ? style.list__nav : style.nav__flex}
        onClick={() => setNavbar(false)}
      >
        <div className={style.link__item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={style.link__item}>
          <Link href="/navigation">
            <a>Our mission</a>
          </Link>
        </div>
        <div className={style.link__item}>
          <Link href="/navigation">
            <a>Places</a>
          </Link>
        </div>
        <div className={style.link__item}>
          <Link href="/navigation">
            <a>Team</a>
          </Link>
        </div>
        <div className={style.btn}>
          <button className={style.btn__apply}>Apply</button>
        </div>
      </div>

      {animation ? <Animated /> : null}

      <button className={style.btn__icon} onClick={() => setNavbar(!navbar)}>
        {navbar ? (
          <IoMdClose className={style.close} />
        ) : (
          <img src="burger.png" />
        )}
      </button>
    </div>
  );
};
export default Navigation;

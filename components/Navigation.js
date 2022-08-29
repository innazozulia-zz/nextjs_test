import React from "react";
import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import style from "../styles/navigation.module.css";

const Navigation = () => {
  const [navbar, setNavbar] = React.useState(false);
  return (
    <div className={style.navigation__container}>
      <div className={style.navigation}>
        <img src="logo.png" atl="logo" />
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

import React from "react";

import style from "../styles/logIn.module.css";

const LogIn = () => {
  return (
    <div className={style.container}>
      <div className={style.description__container}>
        <h3>Get Started Today!</h3>
        <p>
          Learn more about how you can save our planet's nature. From start
          consumption to switching to renewable energy, earch of us can do our
          part to save the planet.
        </p>
      </div>
      <div className={style.logIn__container}>
        <h3>Log In</h3>
        <input className={style.input} type="text" placeholder="Name"></input>
        <input className={style.input} type="text" placeholder="Email"></input>
        <button className={style.btn}>Book a demo</button>
      </div>
    </div>
  );
};
export default LogIn;

import React from "react";
import style from "../styles/logInForm.module.css";

const LogInForm = () => {
  return (
    <div className={style.logIn__container}>
      <img className={style.element__one} src="loginFrom/element-1.png" />
      <img className={style.element__two} src="loginFrom/element-2.png" />
      <h3>Log In</h3>
      <input className={style.input} type="text" placeholder="Name"></input>
      <input className={style.input} type="text" placeholder="Email"></input>
      <button className={style.btn}>Book a demo</button>
    </div>
  );
};
export default LogInForm;

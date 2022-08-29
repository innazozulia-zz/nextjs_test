import LogInForm from "./LogInForm";

import style from "../styles/logIn.module.css";

const LogIn = () => {
  return (
    <div className={style.container}>
      <div className={style.description__container}>
        <h3>Get Started Today!</h3>
        <p>
          Learn more about how you can save our planet's nature. From smart
          consumption to switching to renewable energy, each of us can do our
          part to save the planet.
        </p>
      </div>
      <LogInForm />
    </div>
  );
};
export default LogIn;

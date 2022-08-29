import Accordion from "./Accordion";

import style from "../styles/getStartedInformation.module.css";

const GetStartedInformation = () => {
  return (
    <div className={style.content}>
      <div className={style.text}>
        <h2>Ready To Get Started?</h2>
        <p className={style.description}>
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <button className={style.btn}>
          <a href="#">contact us </a>
        </button>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default GetStartedInformation;

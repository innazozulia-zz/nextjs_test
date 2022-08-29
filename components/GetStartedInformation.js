import Accordion from "./Accordion";

import style from "../styles/getStartedInformation.module.css";

const GetStartedInformation = () => {
  return (
    <div className={style.content}>
      <div className={style.text}>
        <h2>Ready to get started?</h2>
        <p className={style.description}>
          When pattern is mentionted in interior design, it is easy to
          accociateit with geometric pattered wallpaperor colorful prints on
          interior fabrics.
        </p>
        <button>contact us</button>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default GetStartedInformation;

import style from "../styles/ourTeam.module.css";

const OurTeam = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h3 className={style.title}>Out Top Team</h3>
        <p className={style.descriptoin}>
          Learn more about how you can save our planet's nature
        </p>
      </div>
      <div className={style.team__container}>
        <div>
          <img src="" alt="our team" />
        </div>
        <div>
          <img src="" alt="our team" />
        </div>
        <div>
          <img src="" alt="our team" />
        </div>
      </div>
    </div>
  );
};
export default OurTeam;

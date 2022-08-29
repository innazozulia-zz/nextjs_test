import style from "../styles/ourTeam.module.css";

const OurTeam = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h3 className={style.title}>Our Top Team</h3>
        <p className={style.descriptoin}>
          Learn more about how you can save our planet's nature
        </p>
      </div>
      <div className={style.team__container}>
        <div className={style.team__item__one}>
          <img
            className={style.img__photo}
            src="teamComponent/item-1.png"
            alt="our team"
          />
          <img
            className={style.line_left}
            src="teamComponent/line_left.png"
            alt="line"
          />
        </div>
        <div className={style.team__item__two}>
          <img
            className={style.img__photo_two}
            src="teamComponent/item-2.png"
            alt="our team"
          />
        </div>
        <div className={style.team__item__three}>
          <img
            className={style.img__photo_three}
            src="teamComponent/item-3.png"
            alt="our team"
          />
          <img
            className={style.line__right}
            src="teamComponent/line_right.png"
            alt="line"
          />
        </div>
      </div>
    </div>
  );
};
export default OurTeam;

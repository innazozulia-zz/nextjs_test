import style from "../styles/articles.module.css";

const Articles = () => {
  return (
    <div className={style.container}>
      <div className={style.article__item}>
        <div className={style.article__img}>
          <img src="articles/item-1.png" alt="stories" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># Stories</p>
          <h3 className={style.title}>Travel In Japan: The True Experience</h3>
          <a href="#">see more</a>
        </div>
      </div>
      <div className={style.article__item__video}>
        <div className={style.article__video}>
          <img src="articles/item-2.png" alt="video tutor" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># VideoTutor</p>
          <h3 className={style.title__video}>Helping Wind Turtles</h3>
          <a href="#">see more</a>
        </div>
      </div>
      <div className={style.article__item}>
        <div className={style.article__img}>
          <img src="articles/item-3.png" alt="photostory" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># Photostory</p>
          <h3 className={style.title}>Threats of Indusrial World</h3>
          <a href="#">see more</a>
        </div>
      </div>
    </div>
  );
};
export default Articles;

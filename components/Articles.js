import style from "../styles/articles.module.css";

const Articles = () => {
  return (
    <div className={style.container}>
      <div className={style.article__item}>
        <div>
          <img src="" alt="stories" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># Stories</p>
          <h3 className={style.title}>Travel In Japan: The True Experience</h3>
          <a href="#">see more</a>
        </div>
      </div>
      <div className={style.article__item}>
        <div>
          <img src="" alt="video tutor" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># video tutor</p>
          <h3 className={style.title}>Helping Wind Turtles</h3>
          <a href="#">see more</a>
        </div>
      </div>
      <div className={style.article__item}>
        <div>
          <img src="" alt="photostory" />
        </div>
        <div className={style.description}>
          <p className={style.hash}># photostory</p>
          <h3 className={style.title}>Threats of Indusrial World</h3>
          <a href="#">see more</a>
        </div>
      </div>
    </div>
  );
};
export default Articles;

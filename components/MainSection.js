import React from "react";

import style from "../styles/mainSection.module.css";

const MainSection = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.left__side}>
          <div className={style.image__text}>
            <img src="Headline.png" alt="nature needs you" />
          </div>
          <div className={style.description}>
            <p>
              The scale of challenges facing planet can seem daunting, but we
              can all to do something
            </p>
          </div>
          <div className={style.search}>
            <label className={style.label}>
              <svg
                className={style.icon}
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z"
                  fill="#666666"
                />
              </svg>
              <input
                className={style.input}
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder="Find the place to help"
              />
            </label>
            <button className={style.btn__search}>Search</button>
          </div>
        </div>
        <div className={style.rigth__side}>
          <img className={style.image__main} src="Parrot.png" alt="parrot" />
          <img className={style.image__members} src="Сard.png" alt="members" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;

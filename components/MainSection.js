import React from "react";

import style from "../styles/mainSection.module.css";

const MainSection = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };
  return (
    <div className={style.container}>
      <div className={style.left__side}>
        <div className={style.image__text}>
          <img src="" alt="nature needs you" />
        </div>
        <div className={style.description}>
          <p>
            The scale of challenges facing planet can seem daunting, but we can
            all to do something
          </p>
        </div>
        <div className={style.search}>
          <input
            className={style.input}
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="Find the place to help"
          />
          <button className={style.btn__search}>Search</button>
        </div>
      </div>
      <div className={style.rigth__side}>
        <img src="Parrot.png" alt="parrot" />
        <img src="" alt="members" />
      </div>
    </div>
  );
};

export default MainSection;

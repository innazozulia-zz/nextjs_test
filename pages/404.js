import { TbError404 } from "react-icons/tb";

import style from "../styles/error.module.css";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TbError404 />
      </div>
      <p className={style.message}>Something went wrong...</p>
    </div>
  );
};
export default Error;

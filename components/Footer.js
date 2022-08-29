import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer__desktop}>
        <div className={style.footer__item__contact}>
          <h4 className={style.contact__title}>Contacts</h4>
          <p className={style.contact__text}>2019 Rootz Foundation.</p>
          <p className={style.contact__text}>All rights reserved</p>
        </div>
        <div className={style.footer__item}>
          <h4 className={style.adress__title}>Headquarters</h4>
          <p className={style.adress__text}>1234 Taliban</p>
          <p className={style.adress__text}>Los Angeles, La 1234567</p>
          <p className={style.adress__text}>(123) 456-7890</p>
        </div>
        <div className={style.footer__item}>
          <h4 className={style.media__title}>Social media</h4>
          <div className={style.media__items}>
            <img
              className={style.media__icon}
              src="media/Twitter.png"
              alt="Twitter"
            />
            <img
              className={style.media__icon}
              src="media/Facebook.png"
              alt="Facebook"
            />
            <img
              className={style.media__icon}
              src="media/LinkedIn.png"
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
      <div className={style.footer__mobile}>
        <div className={style.footer__item__mobile}>
          <h4 className={style.contact__title}>Contacts</h4>
          <p className={style.contact__text}>
            2019 Rootz Foundation. All rights reserved.
          </p>
        </div>
        <div className={style.footer__items}>
          <div className={style.footer__item}>
            <h4 className={style.adress__title}>Headquarters</h4>
            <p className={style.adress__text}>1234 Taliban</p>
            <p className={style.adress__text}>Los Angeles, La </p>
            <p className={style.adress__text}>1234567</p>
            <p className={style.adress__text}>(123) 456-7890</p>
          </div>
          <div className={style.footer__item}>
            <h4 className={style.media__title}>Social media</h4>
            <div className={style.media__items}>
              <img
                className={style.media__icon}
                src="media/Twitter.png"
                alt="Twitter"
              />
              <img
                className={style.media__icon}
                src="media/Facebook.png"
                alt="Facebook"
              />
              <img
                className={style.media__icon}
                src="media/LinkedIn.png"
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

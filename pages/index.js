import Navigation from "../components/Navigation";
import MainSection from "../components/MainSection";
import Articles from "../components/Articles";
import SliderMain from "../components/SliderMain";
import OurTeam from "../components/OurTeam";
import Title from "../components/Title";
import LogIn from "../components/LogIn";
import GetStartedInformation from "../components/GetStartedInformation";
import SliderFooter from "../components/SliderFooter";
import Footer from "../components/Footer";

import style from "../styles/index.module.css";
// import Animated from "../components/Animated";

const Home = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <MainSection />
      <Articles />
      <SliderMain />
      <OurTeam />
      <Title />
      <LogIn />
      <GetStartedInformation />

      <SliderFooter />

      <Footer />
    </div>
  );
};

export default Home;

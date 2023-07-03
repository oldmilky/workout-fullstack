import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import s from "./Pages.module.scss";

function HomePage() {
  return (
    <div className={s.homePage}>
      <Header />
      <Home />
    </div>
  );
}

export default HomePage;

import { NavLink } from "react-router-dom";
import Stats from "../Stats/Stats";
import s from "./Home.module.scss";

function Home() {
  return (
    <div className={s.home}>
      <NavLink to="new-workout">
        <button className={s.buttonNew}>New</button>
      </NavLink>
      <h1 className={s.title}>EXERCISE FOR THE SHOULDERS</h1>
      <Stats />
    </div>
  );
}

export default Home;

import loader from "../../assets/images/three-dots.svg";
import s from "./Loader.module.scss";

function Loader() {
  return (
    <>
      <img
        className={s.loader}
        src={loader}
        alt="loader"
      />
    </>
  );
}

export default Loader;

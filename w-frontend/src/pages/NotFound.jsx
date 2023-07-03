import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import s from "./Pages.module.scss";

function NotFound() {
  return (
    <div className={s.notFoundPage}>
      <Header heading="Not Found" image={mainBackground} />
      <div>not found</div>
    </div>
  );
}

export default NotFound;

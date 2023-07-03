import mainBackground from "../assets/images/mainBackground.png";
import Auth from "../components/Auth/Auth";
import Header from "../components/Header/Header";
import s from "./Pages.module.scss";

function AuthPage() {
  return (
    <div className={s.authPage}>
      <Header heading="auth" image={mainBackground} />
      <Auth />
    </div>
  );
}

export default AuthPage;

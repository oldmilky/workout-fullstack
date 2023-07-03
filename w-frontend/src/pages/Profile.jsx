import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import s from "./Pages.module.scss";

function ProfilePage() {
  return (
    <div className={s.profilePage}>
      <Header heading="Profile" backLink="/" image={mainBackground} />
      <Profile />
    </div>
  );
}

export default ProfilePage;

import after from "../../assets/images/after.svg";
import before from "../../assets/images/before.svg";
import Loader from "../Loader/Loader";
import Stats from "../Stats/Stats";
import s from "./Profile.module.scss";
import { useProfile } from "./useProfile";

function Profile() {
  const { data, isLoading } = useProfile();

  return (
    <section className={s.profile}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.data}>{data?.email}</h1>
          <Stats />
          <div className={s.container}>
            <div className={s.wrap}>
              <h2 className={s.subtitle}>Before</h2>
              <img className={s.image} src={before} alt="before" />
            </div>
            <div className={s.wrap}>
              <h2 className={s.subtitle}>After</h2>
              <img className={s.image} src={after} alt="after" />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Profile;

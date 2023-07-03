import { useProfile } from "../Profile/useProfile";
import s from "./Stats.module.scss";

function Stats() {
  const { data } = useProfile();

  return (
    <div className={s.stats}>
      {data?.statistics?.map((stat, index) => (
        <div className={s.wrapper} key={index}>
          <h2 className={s.subtitle}>{stat.label}</h2>
          <p className={s.text}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;

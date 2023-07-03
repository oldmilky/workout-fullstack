import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import Workouts from "../components/Workout/Workouts";
import s from "./Pages.module.scss";

function WorkoutsPage() {
  return (
    <div className={s.newWorkoutPage}>
      <Header heading="Workouts" backLink="/" image={mainBackground} />
      <Workouts />
    </div>
  );
}

export default WorkoutsPage;

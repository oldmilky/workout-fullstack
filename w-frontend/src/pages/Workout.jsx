import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import Workout from "../components/Workout/Workout";
import s from "./Pages.module.scss";

function WorkoutPage() {
  return (
    <div className={s.newWorkoutPage}>
      <Header heading="Workout" backLink="/workouts" image={mainBackground} />
      <Workout />
    </div>
  );
}

export default WorkoutPage;

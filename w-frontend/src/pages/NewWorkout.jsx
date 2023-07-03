import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import NewWorkout from "../components/NewWorkout/NewWorkout";
import s from "./Pages.module.scss";

function NewWorkoutPage() {
  return (
    <div className={s.newWorkoutPage}>
      <Header heading="New Workout" backLink="/" image={mainBackground} />
      <NewWorkout />
    </div>
  );
}

export default NewWorkoutPage;

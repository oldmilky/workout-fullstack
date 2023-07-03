import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import NewExercise from "../components/NewExercise/NewExercise";
import s from "./Pages.module.scss";

function NewExercisePage() {
  return (
    <div className={s.newExercisePage}>
      <Header
        heading="New Exercise"
        backLink="/new-workout"
        image={mainBackground}
      />
      <NewExercise />
    </div>
  );
}

export default NewExercisePage;

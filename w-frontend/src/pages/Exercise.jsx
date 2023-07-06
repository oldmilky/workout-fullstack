// import Exercise from "../components/Exercise/Exercise";
import ExerciseLog from "../components/ExerciseLog/ExerciseLog";
import s from "./Pages.module.scss";

function ExercisePage() {
  return (
    <div className={s.newExercisePage}>
      <ExerciseLog />
    </div>
  );
}

export default ExercisePage;

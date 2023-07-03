import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import s from "./Workout.module.scss";

function ExerciseItem({ exerciseLog }) {
  const navigate = useNavigate();

  return (
    <div className={s.workoutItem}>
      <button
        className={s.workoutItemButton}
        onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
      >
        <span className={s.span}>{exerciseLog.exercise.name}</span>
        <img
          className={s.img}
          src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
          alt="exercise"
        />
      </button>
    </div>
  );
}

ExerciseItem.propTypes = {
  exerciseLog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    exercise: PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconPath: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExerciseItem;

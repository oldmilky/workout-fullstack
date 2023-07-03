import PropTypes from "prop-types";
import s from "./Workout.module.scss";

function WorkoutItem({ workout, mutate }) {
  return (
    <div className={s.workoutItem}>
      <button
        className={s.workoutItemButton}
        onClick={() => mutate(workout.id)}
      >
        <span className={s.span}>{workout.name}</span>
      </button>
    </div>
  );
}

WorkoutItem.propTypes = {
  workout: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  mutate: PropTypes.func.isRequired,
};

export default WorkoutItem;

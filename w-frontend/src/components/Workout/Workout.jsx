import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import WorkoutLogService from "../../services/workout/workout-log.service";
import Loader from "../Loader/Loader";
import ExerciseItem from "./ExerciseItem";
import s from "./Workout.module.scss";

function Workout() {
  const { id } = useParams();

  const { data: workoutLog, isLoading } = useQuery(
    ["get workout log", id],
    () => WorkoutLogService.getById(id),
    {
      select: ({ data }) => data,
    }
  );

  return (
    <section className={s.workout}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.container}>
          <h2 className={s.min}>{workoutLog.minute} min</h2>
          <h1 className={s.name}>{workoutLog.workout.name}</h1>
          <div className={s.wrap}>
            {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
              <div key={index}>
                <ExerciseItem exerciseLog={exerciseLog} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Workout;

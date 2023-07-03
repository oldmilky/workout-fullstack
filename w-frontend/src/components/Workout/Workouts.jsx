import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import WorkoutLogService from "../../services/workout/workout-log.service";
import WorkoutService from "../../services/workout/workout.service";
import Loader from "../Loader/Loader";
import s from "./Workout.module.scss";
import WorkoutItem from "./WorkoutItem";

function Workouts() {
  const navigate = useNavigate();

  const { data } = useQuery(["get workouts"], () => WorkoutService.getAll(), {
    select: ({ data }) => data,
  });

  const { mutate, isLoading } = useMutation(
    ["Create new workout log"],
    workoutId => WorkoutLogService.create(workoutId),
    {
      onSuccess({ data }) {
        navigate(`/workout/${data.id}`);
      },
    }
  );

  return (
    <section className={s.workouts}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.container}>
          {data?.map(workout => (
            <WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Workouts;

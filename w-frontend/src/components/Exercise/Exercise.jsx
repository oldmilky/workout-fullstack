import { useQuery } from "@tanstack/react-query";
import cn from "clsx";
import { useParams } from "react-router-dom";
import checkCompletedImage from "../../assets/images/checkCompletedImage.svg";
import checkImage from "../../assets/images/checkImage.svg";
import exerciseBackground from "../../assets/images/exerciseBackground.svg";
import ExerciseLogService from "../../services/exercise/exercise-log.service";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import s from "./Exercise.module.scss";

function Exercise() {
  const { id } = useParams();

  const { data, isSuccess, refetch, isLoading } = useQuery(
    ["get exercise log", id],
    () => ExerciseLogService.getById(id),
    {
      select: ({ data }) => data,
    }
  );

  return (
    <>
      <Header
        heading={isSuccess ? data.exercise.name : "Exercise"}
        backLink={isSuccess ? `/workout/${data.workoutLog}` : "/workouts"}
        image={exerciseBackground}
      />
      <section className={s.exercise}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={s.container}>
            <div className={s.row}>
              <div>
                <span>Previous</span>
              </div>
              <div>
                <span>Repeat & Weight</span>
              </div>
              <div>
                <span>Completed</span>
              </div>
            </div>
            {data?.times.map((item, index) => (
              <div
              className={cn(s.row, {
                [s.completed]: item.isCompleted,
              })}
              key={`time ${item.id}`}
            >
              <div
                className={s.opacity}
                key={`Prev ${item.id}/${item.prevWeight}`}
              >
                <input type="number" defaultValue={item.prevWeight} disabled />
                <i>kg{item.isCompleted ? "" : " "}/</i>
                <input type="number" defaultValue={item.prevRepeat} disabled />
              </div>

              <div key={`RepeatWeight ${item.id}/${item.weight}`}>
                <input
                  type="tel"
                  pattern="[0-9]*"
                  defaultValue={item.weight}
                  disabled={item.isCompleted}
                />
                <i>kg{item.isCompleted && " "}/</i>
                <input
                  type="number"
                  defaultValue={item.repeat}
                  disabled={item.isCompleted}
                />
              </div>

              <div key={`Completed ${item.id}/${item.isCompleted}`}>
                <img
                  src={
                    item.isCompleted
                      ? checkCompletedImage
                      : checkImage
                  }
                  className={s.checkbox}
                  alt=""
                />
              </div>
            </div>
            ))}
            
          </div>
        )}
      </section>
    </>
  );
}

export default Exercise;

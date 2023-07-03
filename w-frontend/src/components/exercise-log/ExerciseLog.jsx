import exerciseBackground from "../../assets/images/exerciseBackground.svg";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./ExerciseLog.module.scss";
import { useExerciseLog } from "./hooks/useExerciseLog";
import TableHeader from "./table/TableHeader";
import TableRow from "./table/TableRow";

const ExerciseLog = () => {
  const { exerciseLog, isLoading, isSuccess } = useExerciseLog();

  return (
    <>
      <Header
        heading={isSuccess ? exerciseLog.exercise.name : "Exercise"}
        backLink={
          isSuccess ? `/workout/${exerciseLog.workoutLog}` : "/workouts"
        }
        image={exerciseBackground}
      />
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            <TableHeader />
            {exerciseLog?.times.map((item, index) => (
              <TableRow item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExerciseLog;

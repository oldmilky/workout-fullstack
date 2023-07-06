import exerciseBackground from "../../assets/images/exerciseBackground.svg";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./ExerciseLog.module.scss";
// import { useCompleteLog } from "./hooks/useCompleteLog";
import { useExerciseLog } from "./hooks/useExerciseLog";
import TableHeader from "./table/TableHeader";
import TableRow from "./table/TableRow";

const ExerciseLog = () => {
  const {
    exerciseLog,
    isLoading,
    isSuccess,
    getState,
    onChangeState,
    toggleTime,
  } = useExerciseLog();
  // const { completeLog } = useCompleteLog();

  return (
    <>
      <Header
        heading={isSuccess ? exerciseLog.exercise.name : "Exercise"}
        backLink={
          isSuccess ? `/workout/${exerciseLog.workoutLogId}` : "/workouts"
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
            {exerciseLog?.times.map(item => (
              <TableRow
                getState={getState}
                onChangeState={onChangeState}
                toggleTime={toggleTime}
                item={item}
                key={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExerciseLog;

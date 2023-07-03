import cn from "clsx";
import PropTypes from "prop-types";
import checkCompleted from "../../../assets/images/checkCompletedImage.svg";
import check from "../../../assets/images/checkImage.svg";
import styles from "../ExerciseLog.module.scss";

const TableRow = ({ item }) => {
  return (
    <div
      className={cn(styles.row, {
        [styles.completed]: item.isCompleted,
      })}
      key={`time ${item.id}`}
    >
      <div
        className={styles.opacity}
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
              ? checkCompleted
              : check
          }
          className={styles.checkbox}
          alt=""
        />
      </div>
    </div>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    prevWeight: PropTypes.number.isRequired,
    prevRepeat: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    repeat: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};

export default TableRow;

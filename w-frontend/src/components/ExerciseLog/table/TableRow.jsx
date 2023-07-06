import cn from "clsx";
import PropTypes from "prop-types";
import checkCompleted from "../../../assets/images/checkCompletedImage.svg";
import check from "../../../assets/images/checkImage.svg";
import styles from "../ExerciseLog.module.scss";

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
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
          value={getState(item.id, "weight")}
          onChange={e => onChangeState(item.id, "weight", e.target.value)}
          disabled={item.isCompleted}
        />
        <i>kg{item.isCompleted ? "" : " "}/</i>
        <input
          type="number"
          value={getState(item.id, "repeat")}
          onChange={e => onChangeState(item.id, "repeat", e.target.value)}
          disabled={item.isCompleted}
        />
      </div>

      <div key={`Completed ${item.id}/${item.isCompleted}`}>
        <img
          src={
            getState(item.id, "isCompleted")
              ? checkCompleted
              : check
          }
          className={styles.checkbox}
          alt=""
          onClick={() => {
            toggleTime(item.id, !getState(item.id, "isCompleted"));
          }}
        />
      </div>
    </div>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    prevWeight: PropTypes.number,
    prevRepeat: PropTypes.number,
    weight: PropTypes.number,
    repeat: PropTypes.number,
    isCompleted: PropTypes.bool,
  }),
  getState: PropTypes.func,
  onChangeState: PropTypes.func,
  toggleTime: PropTypes.func,
};

export default TableRow;

import styles from "./TodoFilter.module.css";

const TodoFilter = (props) => {
  const { todoFilter = Function.prototype } = props;

  return (
    <div className={styles["filter-buttons"]}>
      <button
        onClick={() => todoFilter("all")}
        className={`${styles["btn-all"]} ${styles.btn}`}
      >
        All
      </button>
      <button
        onClick={() => todoFilter(true)}
        className={`${styles["btn-active"]} ${styles.btn}`}
      >
        Active
      </button>
      <button
        onClick={() => todoFilter(false)}
        className={`${styles["btn-done"]} ${styles.btn}`}
      >
        Done
      </button>
    </div>
  );
};

export default TodoFilter;

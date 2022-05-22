import styles from "./TodoCounterTask.module.css";

const TodoCounterTask = (props) => {
  const { todo } = props;

  const countTodo = todo.filter((el) => el.done).length;
  const countDone = todo.length - countTodo;

  return (
    <div className={styles.counter}>
      <h3 className={styles["counter-title"]}>
        {countTodo} tasks to do, {countDone} done
      </h3>
    </div>
  );
};

export default TodoCounterTask;

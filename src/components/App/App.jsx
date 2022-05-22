import React, { Fragment, useState } from "react";
import styles from "./App.module.css";

import Header from "../Header/Header";
import TodoCounterTask from "../TodoCounterTask/TodoCounterTask";
import TodoAdd from "../Todoadd/TodoAdd";
import TodoList from "../Todolist/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className={styles.wrapper}>
      <Fragment>
        <Header />
        <TodoCounterTask todo={todo} setTodo={setTodo} />
        <TodoAdd todo={todo} setTodo={setTodo} />
        {todo.length ? (
          <TodoList todo={todo} setTodo={setTodo} />
        ) : (
          <h2 className={styles["text-alternative"]}>No Task</h2>
        )}
      </Fragment>
    </div>
  );
};

export default App;
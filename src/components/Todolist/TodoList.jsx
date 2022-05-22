import React, { useState, Fragment, useEffect } from "react";
import styles from "./TodoList.module.css";

import TodoItem from "../Todoitem/TodoItem";
import TodoFilter from "../Todofilter/TodoFilter";
import { BsSave } from "react-icons/bs";

const TodoList = (props) => {
  const { todo, setTodo } = props;
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  const [filtered, setFiltered] = useState(todo);

  const deleteItem = (id) => {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const editItem = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveItem = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };

  const doneItem = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const importantItem = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.important = !item.important;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const todoFilter = (done) => {
    if (done === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.done === done);
      setFiltered(newTodo);
    }
  };

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  return (
    <Fragment>
      <TodoFilter todoFilter={todoFilter} />
      {filtered.map((item) => (
        <div key={item.id} className={styles["todo-list-group"]}>
          {edit === item.id ? (
            <div className={styles["todo-edit"]}>
              <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className={styles["todo-edit-input"]}
              />
              <button
                onClick={() => saveItem(item.id)}
                className={styles["todo-edit-button"]}
              >
                <BsSave />
              </button>
            </div>
          ) : (
            <TodoItem
              {...item}
              deleteItem={deleteItem}
              doneItem={doneItem}
              importantItem={importantItem}
              editItem={editItem}
            />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default TodoList;

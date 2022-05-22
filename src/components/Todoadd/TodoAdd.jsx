import React, { useState } from "react";
import styles from "./TodoAdd.module.css";

const TodoAdd = (props) => {
  const { todo, setTodo } = props;
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value) {
      setTodo([
        ...todo,
        {
          id: Math.random().toFixed(3).toString(),
          title: value,
          done: true,
          important: true,
        },
      ]);
      setValue("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem(e);
    }
  };

  return (
    <div className={styles["todo-add"]}>
      <input
        className={styles["todo-add-input"]}
        placeholder="New task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className={styles["todo-add-button"]} onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default TodoAdd;

import React from "react";
import styles from "./TodoItem.module.css";
import { BsExclamation, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const TodoItem = (props) => {
  const {
    title,
    id,
    done,
    important,
    deleteItem = Function.prototype,
    doneItem = Function.prototype,
    importantItem = Function.prototype,
    editItem = Function.prototype,
  } = props;

  return (
    <div className={styles["todo-item"]}>
      <div
        className={`${!done ? styles.done : ""} ${
          !important ? styles.important : ""
        } ${styles["todo-item-title"]}`}
        onClick={() => doneItem(id)}
      >
        {title}
      </div>
      <div className={styles["todo-item-btn"]}>
        <button
          className={`${!important ? styles.active : ""} ${
            styles["item-btn"]
          } ${styles["btn-exclamation"]}`}
          onClick={() => importantItem(id)}
        >
          <BsExclamation className={styles["icon-exclamation"]} />
        </button>
        <button
          className={`${styles["btn-edit"]} ${styles["item-btn"]}`}
          onClick={() => editItem(id, title)}
        >
          <FiEdit className={styles["icon-edit"]} />
        </button>
        <button
          className={`${styles["btn-delete"]} ${styles["item-btn"]}`}
          onClick={() => deleteItem(id)}
        >
          <BsTrash className={styles["icon-delete"]} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

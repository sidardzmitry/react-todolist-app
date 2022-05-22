import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles["header-title"]}>Todo List App</h1>
    </div>
  );
};

export default Header;

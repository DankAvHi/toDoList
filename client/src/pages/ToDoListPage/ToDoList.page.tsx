import ToDoList from "./components/ToDoList/ToDoList";
import styles from "./ToDoListPage.module.css";

const ToDoListPage = () => {
     return (
          <div className={styles.ToDoListPage}>
               <ToDoList />
          </div>
     );
};

export default ToDoListPage;

import { ToDo as ToDoType, ToDoList as ToDoListType } from "../../../../../../../../shared/types/toDo";
import styles from "./ToDo.module.css";

type ToDoProps = {
     toDo: ToDoType;
     setToDoList: React.Dispatch<React.SetStateAction<ToDoListType>>;
};

const ToDo = ({ toDo, setToDoList }: ToDoProps) => {
     const deleteToDoButtonOnClickHandler = () => {
          setToDoList((prev) => {
               const newToDoList = prev.filter((prevToDo) => prevToDo.id !== toDo.id);
               sessionStorage.setItem("toDoList", JSON.stringify(newToDoList));
               return newToDoList;
          });
     };

     const checkButtonOnClickHandler = () => {
          setToDoList((prev) => {
               const newToDoList = prev.map((prevToDo) =>
                    prevToDo.id === toDo.id ? { ...toDo, checked: !toDo.checked } : prevToDo
               );
               sessionStorage.setItem("toDoList", JSON.stringify(newToDoList));
               return newToDoList;
          });
     };

     const checkedButtonClassNames = toDo.checked ? styles.check_checked : null;

     return (
          <li className={styles.ToDo}>
               <div className="info">
                    <h3>{toDo.title}</h3>
                    <p>{toDo.text}</p>
                    <i>{`ID: ${toDo.id}`}</i>
               </div>
               <div className={styles.controls}>
                    <button
                         className={`${styles.check} ${checkedButtonClassNames}`}
                         onClick={checkButtonOnClickHandler}
                    >
                         {toDo.checked ? `Выполненно` : `Отметить`}
                    </button>
                    <button className={styles.delete} onClick={deleteToDoButtonOnClickHandler}>{`Удалить`}</button>
               </div>
          </li>
     );
};

export default ToDo;

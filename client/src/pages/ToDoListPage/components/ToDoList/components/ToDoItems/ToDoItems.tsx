import { ToDoList, ToDoList as ToDoListType } from "../../../../../../shared/types/toDo";
import ToDo from "./components/ToDo/ToDo";
import styles from "./ToDoItems.module.css";

type ToDoItemsProps = { toDoList: ToDoList; setToDoList: React.Dispatch<React.SetStateAction<ToDoListType>> };

const ToDoItems = ({ toDoList, setToDoList }: ToDoItemsProps) => {
     return (
          <>
               {toDoList.length > 0 && <h2 className={styles.heading}>{`Задачи:`}</h2>}
               <ul className={styles.ToDoItems}>
                    {toDoList.map((toDo) => (
                         <ToDo toDo={toDo} key={toDo.id} setToDoList={setToDoList} />
                    ))}
               </ul>
          </>
     );
};

export default ToDoItems;

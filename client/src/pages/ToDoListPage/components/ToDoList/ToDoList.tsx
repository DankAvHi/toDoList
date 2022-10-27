import { useEffect, useState } from "react";
import { RawToDo, ToDoList as ToDoListType } from "../../../../shared/types/toDo";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
import ToDoItems from "./components/ToDoItems/ToDoItems";
import styles from "./ToDoList.module.css";

const initialToDo: RawToDo = { title: "", text: "" };

const ToDoList = () => {
     const [toDo, setToDo] = useState<RawToDo>(initialToDo);
     const [toDoList, setToDoList] = useState<ToDoListType>([]);

     useEffect(() => {
          setToDoList(JSON.parse(sessionStorage.getItem("toDoList") || `[]`));
     }, []);

     return (
          <div className={styles.ToDoList}>
               <AddToDoForm initialToDo={initialToDo} setToDo={setToDo} setToDoList={setToDoList} toDo={toDo} />
               <ToDoItems toDoList={toDoList} setToDoList={setToDoList} />
          </div>
     );
};

export default ToDoList;

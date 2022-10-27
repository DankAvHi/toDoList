import FlatInput from "../../../../../../components/UI/Inputs/FlatInput/FlatInput";
import FlatTextarea from "../../../../../../components/UI/Textareas/FlatTextarea/FlatTextarea";
import { RawToDo, ToDoList } from "../../../../../../shared/types/toDo";
import styles from "./AddToDoForm.module.css";

type AddToDoFormProps = {
     toDo: RawToDo;
     setToDo: React.Dispatch<React.SetStateAction<RawToDo>>;
     setToDoList: React.Dispatch<React.SetStateAction<ToDoList>>;
     initialToDo: RawToDo;
};

const AddToDoForm = ({ toDo, setToDo, setToDoList, initialToDo }: AddToDoFormProps) => {
     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setToDo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
     };

     const addToDoToList = (event: React.FormEvent) => {
          event.preventDefault();

          setToDoList((prev) => {
               const id = prev.length ? prev.at(-1)!.id + 1 : 0;
               const newToDoList: ToDoList = [
                    ...prev,
                    { ...toDo, title: toDo.title.trim().length ? toDo.title : `Нет заголовка`, id, checked: false },
               ];
               sessionStorage.setItem("toDoList", JSON.stringify(newToDoList));
               return newToDoList;
          });
          setToDo(initialToDo);
     };
     return (
          <form onSubmit={addToDoToList} className={styles.AddToDoForm}>
               <FlatInput
                    className={styles.title}
                    onChange={inputOnChangeHandler}
                    value={toDo.title}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Заголовок"
               />
               <FlatTextarea
                    className={styles.text}
                    onChange={inputOnChangeHandler}
                    value={toDo.text}
                    name="text"
                    id="text"
                    placeholder="Текст задачи"
                    required={true}
               />
               <input className={styles.submit} type="submit" value={"Добавить задачу в список"} />
          </form>
     );
};

export default AddToDoForm;

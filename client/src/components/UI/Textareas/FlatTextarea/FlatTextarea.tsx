import React, { useState } from "react";
import { InputPropsType } from "../Textarea.d";
import styles from "./FlatTextarea.module.css";

const FlatTextarea = ({
     name = "input",
     id = name,
     value,
     className,
     placeholder,
     onChange = undefined,
}: InputPropsType) => {
     const [fakeForm, setFakeForm] = useState({
          [name]: "",
     });

     const defaultOnChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setFakeForm({ ...fakeForm, [event.target.name]: event.target.value });
     };

     return (
          <textarea
               name={name}
               placeholder={placeholder}
               id={id}
               value={value ? value : fakeForm[name]}
               onChange={onChange ? onChange : defaultOnChangeHandler}
               className={`${styles.FlatTextarea} ${className}`}
          />
     );
};

export default FlatTextarea;

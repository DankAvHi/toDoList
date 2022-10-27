import React, { useState } from "react";
import { InputPropsType } from "../Input.d";
import styles from "./FlatInput.module.css";

const FlatInput = ({
     name = "input",
     id = name,
     type = "text",
     value,
     className,
     onChange = undefined,
     max = "100",
     min = "0",
     placeholder,
}: InputPropsType) => {
     const [fakeForm, setFakeForm] = useState({
          [name]: "",
     });

     const defaultOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFakeForm({ ...fakeForm, [event.target.name]: event.target.value });
     };

     return (
          <input
               placeholder={placeholder}
               max={max}
               min={min}
               type={type}
               name={name}
               id={id}
               value={value ? value : fakeForm[name]}
               onChange={onChange ? onChange : defaultOnChangeHandler}
               className={`${styles.FlatInput} ${className}`}
          />
     );
};

export default FlatInput;

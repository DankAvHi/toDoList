import React, { useState } from "react";
import { api } from "../../api/index.api";
import FlatButton from "../../components/UI/Buttons/FlatButton/FlatButton";
import FlatInput from "../../components/UI/Inputs/FlatInput/FlatInput";
import { LoginRequest } from "../../shared/types/auth";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
     const { login } = api().useLoginApi();

     const [form, setForm] = useState<LoginRequest>({
          login: "",
          password: "",
     });

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, [event.target.name]: event.target.value });
     };

     const sendLoginRequest = async (event: React.MouseEvent) => {
          event.preventDefault();
          const data = await login(form);

          if (data.succes) {
               window.location.reload();
          }
     };

     return (
          <div className={styles.AuthPage}>
               <form className={styles.form}>
                    <FlatInput
                         onChange={inputOnChangeHandler}
                         placeholder={`Логин`}
                         value={form.login}
                         name={`login`}
                         type={""}
                    />
                    <FlatInput
                         type="password"
                         onChange={inputOnChangeHandler}
                         placeholder={`Пароль`}
                         value={form.password}
                         name={`password`}
                    />
                    <FlatButton onClick={sendLoginRequest} text={`Войти / Заегистрироватся`} />
               </form>
          </div>
     );
};

export default AuthPage;

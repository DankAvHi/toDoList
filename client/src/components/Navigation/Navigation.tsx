import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../api/index.api";
import AppContext from "../../app/contexts/App.context";
import AuthContext from "../../app/contexts/AuthContext";
import FlatButton from "../UI/Buttons/FlatButton/FlatButton";
import accountPreimage from "./assets/accountPreimage.jpg";
import closeIcon from "./assets/close.png";
import menuIcon from "./assets/menu.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
     const { isAuthenticated, logout } = useContext(AuthContext);
     const { user } = useContext(AppContext);
     const { logout: logoutRequest } = api().useLogoutApi();
     const location = useLocation();

     const [isOpen, setIsOpen] = useState<boolean>(false);

     const toggleButtonOnClickHandler = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
          setIsOpen((prev) => !prev);
     };

     const logOutButtonOnClickHandler = async () => {
          const data = await logoutRequest();
          if (data.succes) {
               logout();
               window.location.reload();
          }
     };

     useEffect(() => {
          setIsOpen(false);
     }, [location, isAuthenticated]);

     const navigationClassNames = isOpen ? styles.Navigation_opened : null;
     return (
          <>
               <button onClick={toggleButtonOnClickHandler} className={styles.toggleButton}>
                    <img className={styles.toggleButtonImage} src={isOpen ? closeIcon : menuIcon} alt="" />
               </button>
               <nav className={`${styles.Navigation} ${navigationClassNames}`}>
                    <div className={styles.content}>
                         <div className={styles.accountInfo}>
                              <Link tabIndex={isOpen ? 0 : -1} className={styles.accountLogo} to={`/account`}>
                                   <img
                                        className={styles.accountLogoImage}
                                        src={user && user.image && isAuthenticated ? user.image : accountPreimage}
                                        alt=""
                                   />
                              </Link>
                              <p className={styles.text}>{user && isAuthenticated ? user.login : `Гость`}</p>
                         </div>

                         <div className={styles.controls}>
                              {isAuthenticated ? (
                                   <>
                                        {location.pathname === "/account" ? (
                                             <FlatButton
                                                  className={styles.controlButton}
                                                  href={`/to-do-list`}
                                                  mode={"link"}
                                                  text={`Список задач`}
                                             />
                                        ) : (
                                             <FlatButton
                                                  className={styles.controlButton}
                                                  href={`/account`}
                                                  mode={"link"}
                                                  text={`Страница аккаунта`}
                                             />
                                        )}
                                        <FlatButton
                                             onClick={logOutButtonOnClickHandler}
                                             className={styles.controlButton}
                                             text={`Выход`}
                                        />
                                   </>
                              ) : (
                                   <>
                                        <p
                                             className={styles.text}
                                        >{`Зарегистрируйтесь, чтобы сохранить задачи в аккаунте, или оффлайн`}</p>

                                        <FlatButton
                                             tabIndex={isOpen ? 0 : -1}
                                             className={styles.controlButton}
                                             mode={`link`}
                                             href={`/auth`}
                                             text={`Вход / Регистрация`}
                                        />
                                   </>
                              )}
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Navigation;

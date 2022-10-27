import { Navigate, Route, Routes } from "react-router";
import AccountPage from "../pages/AccountPage/Account.page";
import AuthPage from "../pages/AuthPage/Auth.page";
import ToDoListPage from "../pages/ToDoListPage/ToDoList.page";

const useAppRoutes = (isAuth: boolean) => {
     if (!isAuth) {
          return (
               <Routes>
                    <Route path="/to-do-list" element={<ToDoListPage />} />
                    <Route path="/auth" element={<AuthPage />} />

                    <Route path="*" element={<Navigate to={"/to-do-list"} />} />
               </Routes>
          );
     }
     return (
          <Routes>
               <Route path="/to-do-list" element={<ToDoListPage />} />
               <Route path="/account" element={<AccountPage />} />

               <Route path="*" element={<Navigate to={"/to-do-list"} />} />
          </Routes>
     );
};

export default useAppRoutes;

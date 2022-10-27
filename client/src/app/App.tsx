import { useEffect, useState } from "react";
import { api } from "../api/index.api";
import Loader from "../components/Common/loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import { useAuth } from "../hooks/auth.hook";
import { GetUserResponse } from "../shared/types/user";
import styles from "./App.module.css";
import useAppRoutes from "./App.routes";
import AppContext from "./contexts/App.context";
import AuthContext from "./contexts/AuthContext";

function App() {
     const { login, logout, isAuthenticated } = useAuth();
     const appRoutes = useAppRoutes(isAuthenticated === true);
     const { getUser } = api().useGetUserApi();

     const [user, setUser] = useState<GetUserResponse | null>(null);

     useEffect(() => {
          if (isAuthenticated) {
               getUser().then((user) => setUser(user));
          }
     }, [isAuthenticated, getUser]);

     return (
          <AppContext.Provider value={{ user }}>
               <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                    <div className={styles.App}>
                         <Navigation />
                         {isAuthenticated === "unknow" ? <Loader /> : appRoutes}
                    </div>
               </AuthContext.Provider>
          </AppContext.Provider>
     );
}

export default App;

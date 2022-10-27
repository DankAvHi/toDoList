import { createContext } from "react";
import { GetUserResponse } from "../../shared/types/user";

type AppContextType = {
     user: GetUserResponse | null;
};

const initialState: AppContextType = {
     user: null,
};
const AppContext = createContext(initialState);
export default AppContext;

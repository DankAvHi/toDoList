import React from "react";

type AuthContextType = {
     login: (token: string) => void;
     logout: () => void;

     isAuthenticated: boolean | "unknow";
};

const defaultState: AuthContextType = {
     login: (token: string) => {},
     logout: () => {},

     isAuthenticated: false,
};

const AuthContext = React.createContext<AuthContextType>(defaultState);
export default AuthContext;

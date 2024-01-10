import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>({});

export const useAuth = () =>  useContext(AuthContext);

export const AuthProvider = (props:any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{props.children}</AuthContext.Provider>
}
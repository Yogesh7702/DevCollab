import { createContext, useState } from "react";
import { loginUser } from "../api/authapi.js";
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("devcollab-user");
        return storedUser ? JSON.parse(storedUser) : null;
    });


const login = async (email, password) => {
  const data = await loginUser(email, password);

  localStorage.setItem("devcollab-token", data.token);
  localStorage.setItem("devcollab-user", JSON.stringify(data.user));

  setUser(data.user);
};

    const logout = () => {
        setUser(null);
        localStorage.removeItem("devcollab-user");
    };

    return (
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
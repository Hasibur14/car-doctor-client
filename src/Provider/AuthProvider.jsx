import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider >
    );
};

export default AuthProvider;

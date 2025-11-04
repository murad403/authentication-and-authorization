import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        const currentUser = localStorage.getItem("user");
        if(currentUser){
            setUser(JSON.parse(currentUser) || null);
            setLoading(false);
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
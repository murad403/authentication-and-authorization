import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // ! login user
    const login = async (payload) => {
        axios.post('http://localhost:3000/api/v1/auth/sign-in', payload, {withCredentials: true})
            .then(result => {
                localStorage.setItem("accessToken", JSON.stringify(result.data.accessToken));
                localStorage.setItem("user", JSON.stringify(result.data.data));
                setUser(result.data.data);
                toast.success(result.data.message);
            })
            .catch(error => {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            })
    }
    // ! logout user--------
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setUser(null);
        toast.success("Logout successfully!");
    }

    // !get current user-------------
    useEffect(() => {
        setLoading(true);
        const currentUser = localStorage.getItem("user");
        if (currentUser) {
            setUser(JSON.parse(currentUser) || null);
            setLoading(false);
        }
    }, [])


    const authInfo = {
        login,
        user,
        loading,
        setUser,
        logout
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
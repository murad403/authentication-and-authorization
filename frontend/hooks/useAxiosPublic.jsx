import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAxiosPublic = () => {
    const { user } = useContext(AuthContext);

    const instance = axios.create({
        baseURL: "http://localhost:3000/api/v1",
        withCredentials: true,
    });
    return instance;
};

export default useAxiosPublic;
import axios from "axios";

const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: "http://localhost:3000/api/v1",
        withCredentials: true
    });
    return instance;
};

export default useAxiosPublic;
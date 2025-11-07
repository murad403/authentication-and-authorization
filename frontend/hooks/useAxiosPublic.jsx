import axios from "axios";

const useAxiosPublic = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    // console.log(accessToken);
    const instance = axios.create({
        baseURL: "http://localhost:3000/api/v1",
        withCredentials: true,
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return instance;
};

export default useAxiosPublic;
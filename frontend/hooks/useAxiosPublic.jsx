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
    
    instance.interceptors.response.use((response) =>{
        return response;
    }, async(error) =>{
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try {
                const res = await axios.post("http://localhost:3000/api/v1/auth/generate-token", {}, {withCredentials: true});
                console.log("dta", res.data);
                const newAccessToken = res.data.accessToken;
                localStorage.setItem("accessToken", JSON.stringify(newAccessToken));
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            } catch (err) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    })
    return instance;
};

export default useAxiosPublic;
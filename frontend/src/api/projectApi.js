import axios from "axios";

export const fetchProjectApi = () => {
    return axios.get("http://localhost:5000/api/projects");
};
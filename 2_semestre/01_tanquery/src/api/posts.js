import axios from "axios";

export const fetchPosts = async () => {
    const response = await axios.get("https://689098f2944bf437b5969981.mockapi.io/users");
    return response.data;
}
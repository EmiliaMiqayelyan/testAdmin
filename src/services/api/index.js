import axios from "axios";

const api = axios.create({
    baseURL:"https://api-tm.annaniks.com/"
})
export default api;
import axios from "axios";

const api = axios.create({baseURL: ProcessingInstruction.env.React_APP_API_URL, });

export default api;
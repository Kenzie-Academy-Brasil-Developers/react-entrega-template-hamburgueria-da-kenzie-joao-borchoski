import axios from "axios";

export const Api = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
    timeout: 5000,
});

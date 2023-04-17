import axios from "axios";

const api = axios.create({
  baseURL: "https://rest.coinapi.io/v1/",
  headers: {
    "Content-Type": "application/json",
    "X-CoinAPI-Key": "46AFA969-07F3-4110-A335-0F0960CD4228",
  },
});

export default api;

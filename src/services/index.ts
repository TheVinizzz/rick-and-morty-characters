import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 1000 * 60 * 15,
  headers: {
    'Content-Type': 'application/json',
  } ,
})
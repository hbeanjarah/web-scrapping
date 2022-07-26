import axios from "axios";

export const Employe = axios
  .get("http://localhost:8000")
  .then(async (data) => await data.data)
  .catch((err) => console.log("error from fetch", err));

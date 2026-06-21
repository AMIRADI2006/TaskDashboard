import api from "../services/axios";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

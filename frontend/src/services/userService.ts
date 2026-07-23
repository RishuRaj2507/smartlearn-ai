import axios from "axios";
import api from "./api";

const API =
  "http://localhost:8000/api/user";

export const createEmployee =
  async (employeeData: any) => {
    const response =
      await axios.post(
        `${API}/create`,
        employeeData
      );

    return response.data;
  };

export const getProfile = async () => {
  const response = await api.get("/user/profile");

  return response.data;
};

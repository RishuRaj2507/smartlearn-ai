import axios from "axios";

const API =
"http://localhost:8000/api/admin";

export const getAdminDashboard =
async () => {

  const response =
    await axios.get(
      `${API}/dashboard`
    );

  return response.data;
};
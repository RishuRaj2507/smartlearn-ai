import axios from "axios";

const API =
  "http://localhost:8000/api/progress";

export const updateProgress =
  async (
    id: string,
    progress: number
  ) => {
    const response =
      await axios.put(
        `${API}/${id}`,
        { progress }
      );

    return response.data;
  };
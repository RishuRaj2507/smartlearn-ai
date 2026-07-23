import axios from "axios";

const API =
  "http://localhost:8000/api/enrollment";

export const getMyCourses =
  async (employeeId: string) => {
    const response =
      await axios.get(
        `${API}/my/${employeeId}`
      );

    return response.data;
  };

export const updateProgress =
  async (
    enrollmentId: string,
    progress: number
  ) => {
    const response =
      await axios.put(
        `${API}/progress/${enrollmentId}`,
        {
          progress,
        }
      );

    return response.data;
  };
import axios from "axios";

const API =
  "http://localhost:8000/api/certificate";

export const getMyCertificates =
  async (employeeId: string) => {
    const response =
      await axios.get(
        `${API}/employee/${employeeId}`
      );

    return response.data;
  };

export const generateCertificate =
  async (
    employeeId: string,
    courseId: string
  ) => {
    const response =
      await axios.post(
        `${API}/generate`,
        {
          employeeId,
          courseId,
        }
      );

    return response.data;
  };
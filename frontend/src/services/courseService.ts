import axios from "axios";

const API =
  "http://localhost:8000/api/course";

export const createCourse =
  async (courseData: any) => {
    const response =
      await axios.post(
        `${API}/create`,
        courseData
      );

    return response.data;
  };

export const getCourses =
  async () => {
    const response =
      await axios.get(
        `${API}/all`
      );

    return response.data;
  };
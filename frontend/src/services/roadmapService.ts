import axios from "axios";

export const getRoadmap = async (
  skill: string
) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/roadmap/generate",
      {
        skill,
      }
    );

    return response.data;
  } catch (error: any) {
    console.log(
      "ROADMAP ERROR:",
      error.response?.data
    );

    throw error;
  }
};
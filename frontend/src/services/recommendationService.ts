import axios from "axios";

const API =
  "http://localhost:8000/api/recommendations";

export const getRecommendations =
  async () => {
    const response =
      await axios.get(API);

    return response.data;
  };
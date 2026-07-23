import axios from "axios";

const API =
  "http://localhost:8000/api/analytics";

export const getAnalytics =
  async () => {
    const response =
      await axios.get(
        `${API}/overview`
      );

    return response.data;
  };

export const getTrend =
  async () => {
    const response =
      await axios.get(
        `${API}/trend`
      );

    return response.data;
  };
  export const getCompletion =
  async () => {
    const response =
      await axios.get(
        "http://localhost:8000/api/analytics/completion"
      );

    return response.data;
  };
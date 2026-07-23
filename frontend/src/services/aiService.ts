import api from "./api";

export interface AIResponse {
  success: boolean;
  response: string;
}

export const sendMessageToAI = async (
  message: string
): Promise<AIResponse> => {
  const response = await api.post("/ai/chat", {
    message,
  });

  return response.data;
};
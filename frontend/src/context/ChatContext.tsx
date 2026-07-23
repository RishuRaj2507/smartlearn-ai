"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { sendMessageToAI } from "@/services/aiService";

export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

interface ChatContextType {
  messages: Message[];
  loading: boolean;
  sendMessage: (message: string) => Promise<void>;
  clearChat: () => void;
}

const DEFAULT_MESSAGE: Message = {
  id: "welcome",
  sender: "ai",
  text: "👋 Hello! I'm your AI Learning Coach. Ask me anything about PLC, Industrial Automation, Lean Manufacturing, Predictive Maintenance, SCADA, or your learning roadmap.",
  timestamp: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

const ChatContext =
  createContext<ChatContextType | null>(null);

export function ChatProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [messages, setMessages] = useState<Message[]>([
    DEFAULT_MESSAGE,
  ]);

  const [loading, setLoading] = useState(false);

  /* Load chat history */

  useEffect(() => {
    const saved =
      localStorage.getItem("smartlearn-chat");

    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  /* Save chat history */

  useEffect(() => {
    localStorage.setItem(
      "smartlearn-chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  const sendMessage = async (
    message: string
  ) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      setLoading(true);

      const response =
        await sendMessageToAI(message);

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        sender: "ai",
        text: response.response,
        timestamp:
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "❌ Sorry! Something went wrong while generating the response.",
          timestamp:
            new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([DEFAULT_MESSAGE]);

    localStorage.removeItem(
      "smartlearn-chat"
    );
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        sendMessage,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context =
    useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider"
    );
  }

  return context;
}
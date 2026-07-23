"use client";

import { useState, useRef } from "react";

import {
  Send,
  Loader2,
  Mic,
  MicOff,
} from "lucide-react";

import { useChat } from "@/context/ChatContext";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function ChatInput() {
  const { sendMessage, loading } = useChat();

  const [message, setMessage] = useState("");

  const [listening, setListening] =
    useState(false);

  const recognitionRef = useRef<any>(null);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessage("");

    await sendMessage(userMessage);
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleSend();
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript =
        event.results[0][0].transcript;

      setMessage((prev) =>
        prev
          ? `${prev} ${transcript}`
          : transcript
      );
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        rounded-2xl
        p-4
      "
    >
      <div className="flex items-center gap-3">

        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder="Ask your AI Coach anything..."
          className="
            flex-1
            border
            border-slate-200
            dark:border-slate-700
            rounded-xl
            px-4
            py-3
            bg-transparent
            outline-none
            disabled:opacity-60
          "
        />

        {/* Voice Button */}

        <button
          onClick={
            listening
              ? stopListening
              : startListening
          }
          className={`
            flex
            items-center
            justify-center
            h-12
            w-12
            rounded-xl
            transition-all
            ${
              listening
                ? "bg-red-600 text-white animate-pulse"
                : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
            }
          `}
        >
          {listening ? (
            <MicOff size={20} />
          ) : (
            <Mic size={20} />
          )}
        </button>

        {/* Send Button */}

        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />
              Thinking...
            </>
          ) : (
            <>
              <Send size={18} />
              Send
            </>
          )}
        </button>

      </div>

      {listening && (
        <p className="mt-3 text-sm text-red-500 animate-pulse">
          🎤 Listening... Speak now.
        </p>
      )}
    </div>
  );
}
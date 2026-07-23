"use client";

import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";

import { useChat } from "@/context/ChatContext";

export default function ChatWindow() {
  const { messages, loading } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        rounded-3xl
        p-6
        h-[550px]
        overflow-y-auto
        shadow-sm
      "
    >
      <div className="space-y-6">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            sender={message.sender}
            message={message.text}
            timestamp={message.timestamp}
          />
        ))}

        {/* AI Typing Indicator */}
        {loading && (
          <div className="flex items-start gap-3">

            <div
              className="
                h-10
                w-10
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                flex
                items-center
                justify-center
                text-white
                shrink-0
              "
            >
              🤖
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-800
                border
                border-slate-200
                dark:border-slate-700
                rounded-2xl
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-2">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    animate-bounce
                  "
                />

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    animate-bounce
                    [animation-delay:0.2s]
                  "
                />

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    animate-bounce
                    [animation-delay:0.4s]
                  "
                />

              </div>

              <p className="mt-2 text-sm text-slate-500">
                AI is thinking...
              </p>

            </div>

          </div>
        )}

        <div ref={bottomRef} />

      </div>
    </div>
  );
}
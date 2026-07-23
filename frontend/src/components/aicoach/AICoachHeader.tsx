"use client";

import { useState } from "react";

import {
  Bot,
  Sparkles,
  Trash2,
  Plus,
} from "lucide-react";

import { useChat } from "@/context/ChatContext";

export default function AICoachHeader() {
  const { clearChat } = useChat();

  const [showConfirm, setShowConfirm] =
    useState(false);

  const handleNewChat = () => {
    clearChat();
    setShowConfirm(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          <div
            className="
              h-16
              w-16
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              via-indigo-600
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              shadow-xl
            "
          >
            <Bot size={32} />
          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              AI Learning Coach
            </h1>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Personalized learning guidance powered by AI.
            </p>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Status */}
          <div
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-green-100
              dark:bg-green-500/10
              text-green-700
              dark:text-green-400
              font-medium
            "
          >
            <Sparkles size={18} />

            AI Online
          </div>

          {/* New Chat */}
          <button
            onClick={() => setShowConfirm(true)}
            className="
              flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              transition
              shadow-lg
            "
          >
            <Plus size={18} />

            New Chat
          </button>

        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            flex
            items-center
            justify-center
            z-50
          "
        >
          <div
            className="
              w-[420px]
              bg-white
              dark:bg-slate-900
              rounded-2xl
              p-6
              shadow-2xl
            "
          >
            <div className="flex items-center gap-3">

              <Trash2
                className="text-red-500"
                size={28}
              />

              <h2 className="text-xl font-bold">
                Start New Chat?
              </h2>

            </div>

            <p className="mt-4 text-slate-500">
              Your current conversation will be cleared.
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() =>
                  setShowConfirm(false)
                }
                className="
                  px-5
                  py-2.5
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                "
              >
                Cancel
              </button>

              <button
                onClick={handleNewChat}
                className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-red-600
                  hover:bg-red-700
                  text-white
                "
              >
                Clear Chat
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
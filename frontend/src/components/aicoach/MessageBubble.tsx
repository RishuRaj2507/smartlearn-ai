"use client";

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  Bot,
  User,
  Copy,
  Check,
} from "lucide-react";

interface MessageBubbleProps {
  sender: "user" | "ai";
  message: string;
  timestamp?: string;
}

export default function MessageBubble({
  sender,
  message,
  timestamp,
}: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`flex items-start gap-3 ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {sender === "ai" && (
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
            shadow-lg
            shrink-0
          "
        >
          <Bot size={20} />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`
          relative
          max-w-[80%]
          rounded-2xl
          px-5
          py-4
          shadow-sm
          transition-all
          ${
            sender === "user"
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
          }
        `}
      >
        {/* Copy Button */}
        {sender === "ai" && (
          <button
            onClick={copyMessage}
            className="
              absolute
              top-3
              right-3
              p-1
              rounded-md
              text-slate-400
              hover:text-blue-600
              hover:bg-slate-100
              dark:hover:bg-slate-700
              transition
            "
          >
            {copied ? (
              <Check size={16} />
            ) : (
              <Copy size={16} />
            )}
          </button>
        )}

        {/* Markdown */}
        <div className="prose prose-sm dark:prose-invert max-w-none leading-7">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({
                inline,
                className,
                children,
                ...props
              }: any) {
                const match =
                  /language-(\w+)/.exec(
                    className || ""
                  );

                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    style={oneDark}
                    PreTag="div"
                    customStyle={{
                      borderRadius: "12px",
                      padding: "16px",
                      fontSize: "14px",
                    }}
                    {...props}
                  >
                    {String(children).replace(
                      /\n$/,
                      ""
                    )}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="
                      bg-slate-200
                      dark:bg-slate-700
                      px-1.5
                      py-0.5
                      rounded
                    "
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {message}
          </ReactMarkdown>
        </div>

        {/* Timestamp */}
        {timestamp && (
          <div
            className={`
              mt-3
              text-xs
              ${
                sender === "user"
                  ? "text-blue-100"
                  : "text-slate-400"
              }
            `}
          >
            {timestamp}
          </div>
        )}
      </div>

      {/* User Avatar */}
      {sender === "user" && (
        <div
          className="
            h-10
            w-10
            rounded-full
            bg-gradient-to-br
            from-slate-700
            to-slate-900
            flex
            items-center
            justify-center
            text-white
            shadow-lg
            shrink-0
          "
        >
          <User size={20} />
        </div>
      )}
    </div>
  );
}
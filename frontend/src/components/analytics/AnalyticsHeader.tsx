"use client";

import {
  Download,
  FileText,
  CalendarDays,
} from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="flex items-start justify-between">

      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Learning Analytics Dashboard
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          AI-powered workforce learning intelligence and performance insights.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button
          className="
            flex items-center gap-2
            px-4 py-3
            rounded-xl
            border border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            hover:bg-slate-50
            dark:hover:bg-slate-800
            transition
          "
        >
          <Download size={16} />
          Export Report
        </button>

        <button
          className="
            flex items-center gap-2
            px-4 py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            transition
          "
        >
          <FileText size={16} />
          Download PDF
        </button>

      </div>

    </div>
  );
}
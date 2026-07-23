"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    score: 58,
  },
  {
    month: "Feb",
    score: 62,
  },
  {
    month: "Mar",
    score: 68,
  },
  {
    month: "Apr",
    score: 73,
  },
  {
    month: "May",
    score: 77,
  },
  {
    month: "Jun",
    score: 82,
  },
];

export default function SkillTrendChart() {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-800
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-6">
        <h3
          className="
            text-xl
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          Skill Growth Trend
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            dark:text-slate-400
            mt-1
          "
        >
          Overall competency improvement
          during the last 6 months
        </p>
      </div>

      {/* KPI */}
      <div className="flex items-center gap-4 mb-6">

        <div>
          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            +24%
          </h2>

          <p
            className="
              text-sm
              text-green-600
            "
          >
            Growth Achieved
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              tick={{
                fontSize: 12,
              }}
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563EB"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Footer */}
      <div
        className="
          mt-5
          pt-4
          border-t
          border-slate-200
          dark:border-slate-800
        "
      >
        <div className="flex justify-between">

          <span
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Current Score
          </span>

          <span
            className="
              font-semibold
              text-blue-600
            "
          >
            82%
          </span>

        </div>
      </div>
    </div>
  );
}
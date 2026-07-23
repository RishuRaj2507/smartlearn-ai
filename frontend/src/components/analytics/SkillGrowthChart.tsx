"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    skill: "PLC",
    score: 75,
  },
  {
    skill: "Hydraulics",
    score: 62,
  },
  {
    skill: "Safety",
    score: 92,
  },
  {
    skill: "Maintenance",
    score: 81,
  },
  {
    skill: "Lean",
    score: 68,
  },
];

export default function SkillGrowthChart() {
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
        shadow-sm
        h-full
      "
    >
      {/* Header */}

      <div className="mb-6">

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Skill Growth Analysis
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Current competency levels across key skills
        </p>

      </div>

      {/* KPI */}

      <div className="mb-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Average Skill Score
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              76%
            </h2>

          </div>

          <div
            className="
              px-3
              py-2
              rounded-xl
              bg-green-50
              dark:bg-green-500/10
            "
          >
            <span className="text-green-600 font-semibold">
              +12%
            </span>
          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="skill"
              tick={{ fontSize: 12 }}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="score"
              radius={[8, 8, 0, 0]}
              fill="#2563EB"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
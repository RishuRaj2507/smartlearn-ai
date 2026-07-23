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
    department: "Production",
    score: 85,
  },
  {
    department: "Maintenance",
    score: 78,
  },
  {
    department: "Quality",
    score: 81,
  },
  {
    department: "Operations",
    score: 74,
  },
];

export default function DepartmentComparisonChart() {
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
      "
    >
      {/* Header */}

      <div className="mb-6">

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Department Performance
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Average learning effectiveness by department
        </p>

      </div>

      {/* KPI */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Best Performing Team
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            Production
          </h3>

        </div>

        <div
          className="
            bg-blue-50
            dark:bg-blue-500/10
            px-4
            py-2
            rounded-xl
          "
        >
          <span className="font-semibold text-blue-600">
            85%
          </span>
        </div>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
            />

            <XAxis type="number" />

            <YAxis
              dataKey="department"
              type="category"
              width={100}
            />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#2563EB"
              radius={[0, 8, 8, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
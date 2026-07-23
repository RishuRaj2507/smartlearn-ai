"use client";

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "PLC", score: 88 },
  { skill: "Safety", score: 92 },
  { skill: "Hydraulics", score: 65 },
  { skill: "Automation", score: 81 },
];

export default function SkillReadinessChart() {
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
      "
    >
      <h3 className="text-lg font-semibold mb-6">
        Skill Readiness
      </h3>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="skill" />
            <Bar dataKey="score" fill="#2563EB" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { getAnalytics } from "@/services/analyticsService";

export default function SkillRadarChart() {
  const [data, setData] =
    useState<any[]>([]);

  const [averageScore, setAverageScore] =
    useState(0);

  useEffect(() => {
    const fetchAnalytics =
      async () => {
        try {
          const analytics =
            await getAnalytics();

          const avg =
            Number(
              analytics.averageScore || 0
            );

          setAverageScore(avg);

          setData([
            {
              skill: "Excellent",
              value:
                analytics.scoreDistribution
                  ?.excellent * 20 || 0,
            },
            {
              skill: "Good",
              value:
                analytics.scoreDistribution
                  ?.good * 20 || 0,
            },
            {
              skill: "Improvement",
              value:
                analytics.scoreDistribution
                  ?.needsImprovement *
                  20 || 0,
            },
            {
              skill: "Avg Score",
              value: avg,
            },
          ]);
        } catch (error) {
          console.error(error);
        }
      };

    fetchAnalytics();
  }, []);

  const strongestSkill =
    data.length > 0
      ? [...data].sort(
          (a, b) => b.value - a.value
        )[0]
      : null;

  const weakestSkill =
    data.length > 0
      ? [...data].sort(
          (a, b) => a.value - b.value
        )[0]
      : null;

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        shadow-sm
        p-6
        h-full
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Skill Analysis
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Live analytics from assessments
          </p>
        </div>

        <span
          className="
            text-xs
            px-3
            py-1
            rounded-full
            bg-blue-50
            dark:bg-blue-500/10
            text-blue-600
          "
        >
          Live
        </span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500">
            Average
          </p>

          <h4 className="text-xl font-bold">
            {averageScore}%
          </h4>
        </div>

        <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500">
            Strongest
          </p>

          <h4 className="text-sm font-semibold text-green-600">
            {strongestSkill?.skill || "-"}
          </h4>
        </div>

        <div className="bg-amber-50 dark:bg-amber-500/10 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500">
            Weakest
          </p>

          <h4 className="text-sm font-semibold text-amber-600">
            {weakestSkill?.skill || "-"}
          </h4>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[250px] mb-6">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <RadarChart data={data}>
            <PolarGrid />

            <PolarAngleAxis
              dataKey="skill"
            />

            <Radar
              dataKey="value"
              stroke="#2563EB"
              fill="#2563EB"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Values */}
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.skill}
            className="flex justify-between"
          >
            <span className="text-sm">
              {item.skill}
            </span>

            <span className="font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Learning Target
          </span>

          <span className="font-semibold text-blue-600">
            80%
          </span>
        </div>
      </div>
    </div>
  );
}
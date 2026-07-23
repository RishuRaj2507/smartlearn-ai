"use client";

import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getTrend } from "@/services/analyticsService";

interface TrendData {
  month: string;
  score: number;
}

export default function LearningTrendChart() {
  const [data, setData] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrend = async () => {
    try {
      const response = await getTrend();

      setData(response.trend || []);
    } catch (error) {
      console.error(
        "Failed to fetch learning trend:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrend();
  }, []);

  const totalScore = data.reduce(
    (sum, item) => sum + item.score,
    0
  );

  const averageScore =
    data.length > 0
      ? Math.round(totalScore / data.length)
      : 0;

  const growth =
    data.length >= 2
      ? data[data.length - 1].score -
        data[0].score
      : 0;

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
          Learning Progress Trend
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Assessment performance over time
        </p>
      </div>

      {/* KPI Section */}
      <div className="flex items-center gap-8 mb-6">
        <div>
          <p className="text-sm text-slate-500">
            Assessments
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {data.length}
          </h2>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Avg Score
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            {averageScore}%
          </h2>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Growth
          </p>

          <h2
            className={`text-3xl font-bold ${
              growth >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {growth >= 0 ? "+" : ""}
            {growth}%
          </h2>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[320px]">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
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

              <YAxis
                domain={[0, 100]}
                tick={{
                  fontSize: 12,
                }}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563EB"
                strokeWidth={4}
                dot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
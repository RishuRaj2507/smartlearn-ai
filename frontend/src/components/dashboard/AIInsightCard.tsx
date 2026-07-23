"use client";

import { useEffect, useState } from "react";

import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import { getAnalytics } from "@/services/analyticsService";

export default function AIInsightCard() {
  const [analytics, setAnalytics] =
    useState<any>(null);

  useEffect(() => {
    const fetchAnalytics =
      async () => {
        try {
          const data =
            await getAnalytics();

          setAnalytics(data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchAnalytics();
  }, []);

  const averageScore =
    Number(
      analytics?.averageScore || 0
    );

  const performanceLevel =
    averageScore >= 80
      ? "Excellent"
      : averageScore >= 60
      ? "Good"
      : "Needs Improvement";

  const recommendation =
    averageScore >= 80
      ? "Continue advanced learning paths and certifications."
      : averageScore >= 60
      ? "Focus on weak assessment areas to improve performance."
      : "Immediate skill development and training recommended.";

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
        flex
        flex-col
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-500/15 flex items-center justify-center">
              <BrainCircuit
                size={18}
                className="text-blue-600"
              />
            </div>

            <span
              className="
                text-xs
                font-semibold
                tracking-wide
                text-blue-600
                bg-blue-50
                dark:bg-blue-500/10
                px-3
                py-1
                rounded-full
              "
            >
              AI ANALYTICS
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Learning Performance
          </h2>
        </div>

        <AlertTriangle
          size={20}
          className="text-amber-500"
        />
      </div>

      {/* Description */}
      <p
        className="
          text-sm
          text-slate-600
          dark:text-slate-400
          leading-6
          mb-6
        "
      >
        AI-generated insights based on
        assessment performance and
        learning progress.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className="
            bg-blue-50
            dark:bg-blue-500/10
            rounded-xl
            p-4
          "
        >
          <p className="text-xs text-slate-500 mb-1">
            Avg Score
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            {averageScore}%
          </h3>
        </div>

        <div
          className="
            bg-green-50
            dark:bg-green-500/10
            rounded-xl
            p-4
          "
        >
          <p className="text-xs text-slate-500 mb-1">
            Assessments
          </p>

          <h3 className="text-2xl font-bold text-green-600">
            {
              analytics?.totalAssessments ||
              0
            }
          </h3>
        </div>
      </div>

      {/* Performance */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-slate-500">
            Performance Level
          </span>

          <span className="text-sm font-semibold text-blue-600">
            {performanceLevel}
          </span>
        </div>

        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              rounded-full
            "
            style={{
              width: `${averageScore}%`,
            }}
          />
        </div>
      </div>

      {/* Recommendation */}
      <div
        className="
          bg-blue-50
          dark:bg-blue-500/10
          rounded-xl
          p-4
          mb-5
        "
      >
        <p className="text-xs font-semibold text-blue-600 mb-2">
          AI RECOMMENDATION
        </p>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          {recommendation}
        </p>
      </div>

      {/* Distribution */}
      <div className="mb-6">
        <p className="text-xs text-slate-500 mb-2">
          Assessment Distribution
        </p>

        <div className="space-y-2 text-sm">
          <div>
            Excellent:{" "}
            {
              analytics?.scoreDistribution
                ?.excellent
            }
          </div>

          <div>
            Good:{" "}
            {
              analytics?.scoreDistribution
                ?.good
            }
          </div>

          <div>
            Needs Improvement:{" "}
            {
              analytics?.scoreDistribution
                ?.needsImprovement
            }
          </div>
        </div>
      </div>

      {/* Footer */}
      <button
        className="
          mt-auto
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          font-medium
          transition-all
          duration-300
        "
      >
        <div className="flex items-center justify-center gap-2">
          <TrendingUp size={16} />
          View Analytics
        </div>
      </button>
    </div>
  );
}
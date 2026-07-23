"use client";

import { useEffect, useState } from "react";

import {
  CalendarDays,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

import { getAnalytics } from "@/services/analyticsService";

export default function SessionCard() {
  const [analytics, setAnalytics] =
    useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          await getAnalytics();

        setAnalytics(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const activities = [
    {
      title: "Completed Assessments",
      value:
        analytics?.totalAssessments || 0,
      icon: Users,
    },
    {
      title: "Average Score",
      value: `${
        analytics?.averageScore || 0
      }%`,
      icon: Clock3,
    },
    {
      title: "Excellent Results",
      value:
        analytics?.scoreDistribution
          ?.excellent || 0,
      icon: CalendarDays,
    },
  ];

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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Learning Activity
          </h3>

          <p className="text-xs text-slate-500">
            Live training analytics
          </p>
        </div>

        <span
          className="
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
            bg-blue-50
            dark:bg-blue-500/15
            text-blue-600
          "
        >
          Live
        </span>
      </div>

      {/* Activity Cards */}
      <div className="space-y-4 flex-1">
        {activities.map(
          (activity, index) => {
            const Icon =
              activity.icon;

            return (
              <div
                key={index}
                className="
                  p-4
                  rounded-xl
                  border
                  border-slate-200
                  dark:border-slate-700
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-blue-100
                      dark:bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {activity.title}
                    </h4>

                    <p className="text-2xl font-bold text-blue-600">
                      {activity.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Footer */}
      <button
        className="
          mt-6
          w-full
          py-3
          rounded-xl
          border
          border-slate-200
          dark:border-slate-700
          hover:bg-slate-50
          dark:hover:bg-slate-800
          transition-all
          flex
          items-center
          justify-center
          gap-2
          text-sm
          font-medium
        "
      >
        View Learning Report
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
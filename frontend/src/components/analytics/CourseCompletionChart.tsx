"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  useEffect,
  useState,
} from "react";

import {
  getCompletion,
} from "@/services/analyticsService";

const COLORS = [
  "#2563EB",
  "#F59E0B",
  "#CBD5E1",
];

export default function CourseCompletionChart() {
  const [data, setData] =
    useState([
      {
        name: "Completed",
        value: 0,
      },
      {
        name: "In Progress",
        value: 0,
      },
      {
        name: "Not Started",
        value: 0,
      },
    ]);

  const [loading, setLoading] =
    useState(true);

  const fetchCompletion =
    async () => {
      try {
        const response =
          await getCompletion();

        const completion =
          response.completion;

        setData([
          {
            name: "Completed",
            value:
              completion.completed,
          },
          {
            name: "In Progress",
            value:
              completion.inProgress,
          },
          {
            name: "Not Started",
            value:
              completion.notStarted,
          },
        ]);
      } catch (error) {
        console.error(
          "Failed to load completion data",
          error
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchCompletion();
  }, []);

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
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Course Completion
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Current learning completion distribution
        </p>
      </div>

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
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
              >
                {data.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {data.map(
          (item, index) => (
            <div
              key={index}
              className="
                rounded-xl
                bg-slate-50
                dark:bg-slate-800
                p-3
                text-center
              "
            >
              <h4 className="font-bold text-lg">
                {item.value}%
              </h4>

              <p className="text-xs text-slate-500">
                {item.name}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
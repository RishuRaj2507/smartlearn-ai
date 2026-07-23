"use client";

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Award,
  Brain,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Learning Velocity Increased",
    description:
      "Maintenance technicians are completing learning modules 22% faster than the company average.",
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-500/10",
  },

  {
    icon: AlertTriangle,
    title: "Critical Skill Gap Detected",
    description:
      "Hydraulics competency remains below target levels across 67% of employees.",
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-500/10",
  },

  {
    icon: Award,
    title: "Certification Success",
    description:
      "Certification completion rates increased by 14% compared to last quarter.",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },

  {
    icon: Brain,
    title: "AI Recommendation",
    description:
      "Prioritize Advanced PLC training to maximize competency growth across engineering teams.",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-500/10",
  },
];

export default function InsightsPanel() {
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

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            h-12
            w-12
            rounded-2xl
            bg-blue-100
            dark:bg-blue-500/10
            flex
            items-center
            justify-center
          "
        >
          <Sparkles
            size={22}
            className="text-blue-600"
          />
        </div>

        <div>

          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            AI Workforce Insights
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enterprise learning intelligence powered by AI
          </p>

        </div>

      </div>

      {/* Insights */}

      <div className="space-y-4">

        {insights.map((insight, index) => {
          const Icon = insight.icon;

          return (
            <div
              key={index}
              className={`
                ${insight.bg}
                rounded-2xl
                p-5
                border
                border-slate-100
                dark:border-slate-800
              `}
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    h-10
                    w-10
                    rounded-xl
                    bg-white
                    dark:bg-slate-800
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  "
                >
                  <Icon
                    size={18}
                    className={insight.color}
                  />
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {insight.title}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-6">
                    {insight.description}
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
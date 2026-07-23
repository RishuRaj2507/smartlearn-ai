import {
    TrendingUp,
    Clock3,
    Users,
    Brain,
  } from "lucide-react";
  
  export default function LearningVelocity() {
    const velocityScore = 92;
  
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
        <div className="flex items-center justify-between mb-6">
  
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Learning Velocity
            </h3>
  
            <p className="text-xs text-slate-500 mt-1">
              AI performance tracking
            </p>
          </div>
  
          <span
            className="
              bg-green-50
              text-green-600
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
            "
          >
            +12%
          </span>
  
        </div>
  
        {/* Circular Score */}
        <div className="flex justify-center mb-6">
  
          <div className="relative w-32 h-32">
  
            <svg
              className="w-32 h-32 rotate-[-90deg]"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#E2E8F0"
                strokeWidth="10"
                fill="none"
              />
  
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#2563EB"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={314}
                strokeDashoffset={
                  314 - (314 * velocityScore) / 100
                }
              />
            </svg>
  
            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {velocityScore}
              </h2>
  
              <p className="text-xs text-slate-500">
                SCORE
              </p>
            </div>
  
          </div>
  
        </div>
  
        {/* Metrics */}
        <div className="space-y-4">
  
          <div
            className="
              flex
              items-center
              justify-between
              bg-slate-50
              dark:bg-slate-800
              rounded-xl
              p-3
            "
          >
            <div className="flex items-center gap-2">
              <Clock3
                size={16}
                className="text-blue-600"
              />
  
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Weekly Effort
              </span>
            </div>
  
            <span className="font-semibold">
              5 hrs/week
            </span>
          </div>
  
          <div
            className="
              flex
              items-center
              justify-between
              bg-slate-50
              dark:bg-slate-800
              rounded-xl
              p-3
            "
          >
            <div className="flex items-center gap-2">
              <Users
                size={16}
                className="text-blue-600"
              />
  
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Peer Ranking
              </span>
            </div>
  
            <span className="font-semibold text-blue-600">
              Top 5%
            </span>
          </div>
  
          <div
            className="
              flex
              items-center
              justify-between
              bg-slate-50
              dark:bg-slate-800
              rounded-xl
              p-3
            "
          >
            <div className="flex items-center gap-2">
              <TrendingUp
                size={16}
                className="text-green-600"
              />
  
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Growth Trend
              </span>
            </div>
  
            <span className="font-semibold text-green-600">
              Rising
            </span>
          </div>
  
        </div>
  
        {/* AI Prediction */}
        <div
          className="
            mt-6
            bg-blue-50
            dark:bg-blue-950/40
            rounded-2xl
            p-4
          "
        >
          <div className="flex items-start gap-3">
  
            <Brain
              size={18}
              className="text-blue-600 mt-1"
            />
  
            <div>
              <p className="text-xs font-semibold text-blue-600 mb-1">
                AI PREDICTION
              </p>
  
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">
                At your current pace, you are expected
                to complete the roadmap
                <span className="font-semibold">
                  {" "}18 days earlier
                </span>
                than the target schedule.
              </p>
            </div>
  
          </div>
        </div>
  
      </div>
    );
  }
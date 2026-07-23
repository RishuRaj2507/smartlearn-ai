import {
    BookOpen,
    Clock3,
    CalendarDays,
    CheckCircle2,
    TrendingUp,
    Target,
  } from "lucide-react";
  
  export default function ProgressWidget() {
    const progress = 32;
  
    return (
      <div
        className="
          bg-[#081A44]
          dark:bg-slate-900
          text-white
          rounded-3xl
          p-6
          shadow-xl
          border
          border-white/10
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
  
          <div>
            <p className="text-slate-400 text-sm">
              Learning Roadmap
            </p>
  
            <h3 className="font-semibold text-xl">
              Progress Overview
            </h3>
          </div>
  
          <div
            className="
              h-10
              w-10
              rounded-xl
              bg-green-500/10
              flex
              items-center
              justify-center
            "
          >
            <CheckCircle2
              size={20}
              className="text-green-400"
            />
          </div>
  
        </div>
  
        {/* Progress Ring */}
        <div className="flex justify-center mb-8">
  
          <div className="relative w-36 h-36">
  
            <svg
              className="w-36 h-36 rotate-[-90deg]"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="10"
                fill="none"
              />
  
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#3B82F6"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={314}
                strokeDashoffset={
                  314 - (314 * progress) / 100
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
              <h2 className="text-4xl font-bold">
                {progress}%
              </h2>
  
              <p className="text-xs text-slate-400">
                Completed
              </p>
            </div>
  
          </div>
  
        </div>
  
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-4 mb-5">
  
          <div className="bg-white/5 rounded-2xl p-4">
  
            <div className="flex items-center gap-2 mb-2">
              <BookOpen
                size={15}
                className="text-blue-400"
              />
  
              <span className="text-xs text-slate-400">
                Modules
              </span>
            </div>
  
            <h4 className="text-2xl font-bold">
              2 / 6
            </h4>
  
          </div>
  
          <div className="bg-white/5 rounded-2xl p-4">
  
            <div className="flex items-center gap-2 mb-2">
              <Clock3
                size={15}
                className="text-blue-400"
              />
  
              <span className="text-xs text-slate-400">
                Hours Left
              </span>
            </div>
  
            <h4 className="text-2xl font-bold">
              82h
            </h4>
  
          </div>
  
        </div>
  
        {/* Weekly Goal */}
        <div className="bg-white/5 rounded-2xl p-4 mb-5">
  
          <div className="flex items-center justify-between mb-2">
  
            <div className="flex items-center gap-2">
  
              <Target
                size={16}
                className="text-amber-400"
              />
  
              <span className="text-sm">
                Weekly Goal
              </span>
  
            </div>
  
            <span className="text-sm font-semibold">
              4 / 5 hrs
            </span>
  
          </div>
  
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
  
            <div
              className="h-full bg-amber-400 rounded-full"
              style={{ width: "80%" }}
            />
  
          </div>
  
        </div>
  
        {/* Completion Date */}
        <div className="bg-white/5 rounded-2xl p-4 mb-5">
  
          <div className="flex items-center gap-3">
  
            <CalendarDays
              size={18}
              className="text-blue-400"
            />
  
            <div>
              <p className="text-xs text-slate-400">
                Estimated Completion
              </p>
  
              <h4 className="font-semibold">
                December 2026
              </h4>
            </div>
  
          </div>
  
        </div>
  
        {/* AI Forecast */}
        <div
          className="
            bg-blue-500/10
            border
            border-blue-500/20
            rounded-2xl
            p-4
            mb-5
          "
        >
          <div className="flex items-start gap-3">
  
            <TrendingUp
              size={18}
              className="text-blue-400 mt-1"
            />
  
            <div>
  
              <p className="text-xs text-blue-300 font-semibold mb-1">
                AI FORECAST
              </p>
  
              <p className="text-sm text-slate-300 leading-6">
                At your current pace, you are expected
                to finish
                <span className="font-semibold text-white">
                  {" "}12 days ahead
                </span>
                {" "}of schedule.
              </p>
  
            </div>
  
          </div>
  
        </div>
  
        {/* Footer */}
        <div className="border-t border-white/10 pt-4">
  
          <p className="text-sm text-slate-300 leading-6">
            You're progressing faster than
            <span className="font-semibold text-white">
              {" "}72% of learners
            </span>
            {" "}in your role.
          </p>
  
        </div>
  
      </div>
    );
  }
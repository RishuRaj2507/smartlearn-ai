import {
    Download,
    Play,
    Sparkles,
    Calendar,
    Target,
  } from "lucide-react";
  
  export default function RoadmapHeader() {
    return (
      <div
        className="
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-800
          rounded-3xl
          p-8
          shadow-sm
        "
      >
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
  
          {/* Left Section */}
          <div>
  
            <div className="flex items-center gap-3 mb-4">
  
              <span
                className="
                  flex
                  items-center
                  gap-2
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1.5
                  rounded-full
                  text-xs
                  font-semibold
                "
              >
                <Sparkles size={14} />
                AI Generated Roadmap
              </span>
  
              <span
                className="
                  bg-slate-100
                  dark:bg-slate-800
                  text-slate-700
                  dark:text-slate-300
                  px-3
                  py-1.5
                  rounded-full
                  text-xs
                  font-medium
                "
              >
                Production Engineer II
              </span>
  
            </div>
  
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Personalized Learning Roadmap
            </h1>
  
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-3xl leading-7">
              This roadmap has been generated based on your
              current competency profile, performance trends,
              role requirements, and future career growth
              opportunities.
            </p>
  
            <div className="mt-5 flex flex-wrap gap-2">
  
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                Advanced PLC
              </span>
  
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium">
                Process Optimization
              </span>
  
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                Lean Manufacturing
              </span>
  
            </div>
  
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col gap-4">
  
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
  
              <div
                className="
                  bg-slate-50
                  dark:bg-slate-800
                  rounded-2xl
                  p-4
                  min-w-[120px]
                "
              >
                <p className="text-xs text-slate-500">
                  Progress
                </p>
  
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  18%
                </h3>
              </div>
  
              <div
                className="
                  bg-slate-50
                  dark:bg-slate-800
                  rounded-2xl
                  p-4
                  min-w-[120px]
                "
              >
                <p className="text-xs text-slate-500">
                  Duration
                </p>
  
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  6 Months
                </h3>
              </div>
  
              <div
                className="
                  bg-slate-50
                  dark:bg-slate-800
                  rounded-2xl
                  p-4
                  min-w-[120px]
                "
              >
                <p className="text-xs text-slate-500">
                  Target Date
                </p>
  
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Mar 2027
                </h3>
              </div>
  
            </div>
  
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm">
  
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Calendar size={16} />
                Started Oct 2026
              </div>
  
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Target size={16} />
                Promotion Ready Path
              </div>
  
            </div>
  
            {/* Buttons */}
            <div className="flex gap-3">
  
              <button
                className="
                  px-5
                  py-3
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-xl
                  font-medium
                  hover:bg-slate-50
                  dark:hover:bg-slate-800
                  transition
                "
              >
                <Download
                  size={16}
                  className="inline mr-2"
                />
                Download PDF
              </button>
  
              <button
                className="
                  px-5
                  py-3
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  rounded-xl
                  font-medium
                  transition
                "
              >
                <Play
                  size={16}
                  className="inline mr-2"
                />
                Resume Learning
              </button>
  
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }
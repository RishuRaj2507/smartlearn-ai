import {
    Sparkles,
    TrendingUp,
    AlertTriangle,
    Target,
  } from "lucide-react";
  
  export default function AIRecommendation() {
    const recommendations = [
      {
        title: "Complete PLC Fundamentals",
        impact: "+12 Skill Points",
        priority: "High",
        icon: Target,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        title: "Review Hydraulics Module",
        impact: "Close Skill Gap",
        priority: "Medium",
        icon: AlertTriangle,
        color: "text-amber-600",
        bg: "bg-amber-50",
      },
    ];
  
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
              h-10
              w-10
              rounded-xl
              bg-blue-100
              flex
              items-center
              justify-center
            "
          >
            <Sparkles
              size={18}
              className="text-blue-600"
            />
          </div>
  
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              AI Learning Coach
            </h3>
  
            <p className="text-xs text-slate-500">
              Personalized recommendations
            </p>
          </div>
  
        </div>
  
        {/* AI Confidence */}
        <div
          className="
            bg-blue-50
            dark:bg-blue-950/30
            rounded-2xl
            p-4
            mb-5
          "
        >
          <div className="flex items-center justify-between">
  
            <span className="text-sm text-slate-600 dark:text-slate-300">
              AI Confidence
            </span>
  
            <span className="font-bold text-blue-600">
              94%
            </span>
  
          </div>
  
          <div className="mt-3 h-2 bg-blue-100 rounded-full overflow-hidden">
  
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: "94%" }}
            />
  
          </div>
  
        </div>
  
        {/* Recommendations */}
        <div className="space-y-4">
  
          {recommendations.map((item, index) => {
            const Icon = item.icon;
  
            return (
              <div
                key={index}
                className={`
                  ${item.bg}
                  dark:bg-slate-800
                  rounded-2xl
                  p-4
                `}
              >
                <div className="flex items-start gap-3">
  
                  <Icon
                    size={18}
                    className={`${item.color} mt-1`}
                  />
  
                  <div className="flex-1">
  
                    <div className="flex justify-between mb-2">
  
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                        {item.title}
                      </h4>
  
                      <span
                        className={`
                          text-xs
                          px-2
                          py-1
                          rounded-lg
                          ${
                            item.priority === "High"
                              ? "bg-red-100 text-red-600"
                              : "bg-amber-100 text-amber-600"
                          }
                        `}
                      >
                        {item.priority}
                      </span>
  
                    </div>
  
                    <p className="text-xs text-slate-500">
                      Expected Impact:
                      <span className="font-medium ml-1 text-slate-700 dark:text-slate-300">
                        {item.impact}
                      </span>
                    </p>
  
                  </div>
  
                </div>
              </div>
            );
          })}
  
        </div>
  
        {/* Prediction */}
        <div
          className="
            mt-5
            pt-5
            border-t
            border-slate-200
            dark:border-slate-800
          "
        >
          <div className="flex items-start gap-3">
  
            <TrendingUp
              size={18}
              className="text-green-600 mt-1"
            />
  
            <div>
  
              <p className="text-xs font-semibold text-green-600 mb-1">
                AI FORECAST
              </p>
  
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">
                Completing your next recommended module
                could improve your overall competency score
                from
                <span className="font-semibold">
                  {" "}78% → 85%
                </span>
                within the next 30 days.
              </p>
  
            </div>
  
          </div>
        </div>
  
        {/* CTA */}
        <button
          className="
            w-full
            mt-6
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-medium
            transition
          "
        >
          Generate New AI Roadmap
        </button>
      </div>
    );
  }
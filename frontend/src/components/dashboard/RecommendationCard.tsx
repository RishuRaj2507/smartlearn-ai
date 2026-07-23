"use client";

import { useEffect, useState } from "react";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { getRecommendations } from "@/services/recommendationService";

interface Recommendation {
  skill: string;
  gap: number;
  recommendation: string;
}

export default function RecommendationCard() {
  const [recommendations, setRecommendations] = useState<
    Recommendation[]
  >([]);

  const [loading, setLoading] = useState(true);

  const fetchRecommendations = async () => {
    try {
      const data =
        await getRecommendations();

      setRecommendations(
        data.recommendations || []
      );
    } catch (error) {
      console.error(
        "Recommendation fetch failed",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
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
        shadow-sm
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="
            w-10
            h-10
            rounded-xl
            bg-blue-100
            dark:bg-blue-500/10
            flex
            items-center
            justify-center
          "
        >
          <BrainCircuit
            size={20}
            className="text-blue-600"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AI Recommendations
          </h3>

          <p className="text-sm text-slate-500">
            Personalized learning guidance
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="py-8 flex justify-center">
          <div
            className="
              h-8
              w-8
              border-4
              border-blue-600
              border-t-transparent
              rounded-full
              animate-spin
            "
          />
        </div>
      ) : recommendations.length === 0 ? (
        <div
          className="
            bg-green-50
            dark:bg-green-500/10
            rounded-xl
            p-4
          "
        >
          <p className="text-green-700 font-medium">
            No skill gaps detected 🎉
          </p>

          <p className="text-sm text-slate-500 mt-1">
            Your current skills meet the
            required competency levels.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendations.map(
            (item, index) => (
              <div
                key={index}
                className="
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-xl
                  p-4
                "
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.skill}
                  </h4>

                  <span
                    className="
                      text-xs
                      px-2
                      py-1
                      rounded-full
                      bg-red-100
                      text-red-600
                    "
                  >
                    Gap: {item.gap}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.recommendation}
                </p>
              </div>
            )
          )}
        </div>
      )}

      {/* Footer */}
      <button
        className="
          mt-6
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
          View Detailed Plan
          <ArrowRight size={16} />
        </div>
      </button>
    </div>
  );
}
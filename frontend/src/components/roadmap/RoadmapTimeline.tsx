"use client";

import { updateProgress } from "@/services/progressService";
import RoadmapCard from "./RoadmapCard";

interface RoadmapItem {
  _id: string;
  month: string;
  title: string;
  difficulty: string;
  duration: string;
  status: string;
  progress: number;
}

interface RoadmapTimelineProps {
  roadmap: RoadmapItem[];
}

export default function RoadmapTimeline({
  roadmap,
}: RoadmapTimelineProps) {

  const handleProgress = async (
    id: string,
    currentProgress: number
  ) => {
    try {
      const newProgress =
        currentProgress >= 100
          ? 100
          : currentProgress + 10;

      await updateProgress(
        id,
        newProgress
      );

      window.location.reload();
    } catch (error) {
      console.error(
        "Failed to update progress:",
        error
      );
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div
        className="
          absolute
          left-[23px]
          top-4
          bottom-4
          w-[2px]
          bg-slate-200
          dark:bg-slate-700
        "
      />

      <div className="space-y-6">
        {roadmap.map((item) => (
          <div
            key={item._id}
            className="relative flex gap-5"
          >
            {/* Timeline Dot */}
            <div
              className={`
                mt-8
                h-5
                w-5
                rounded-full
                border-4
                z-10
                ${
                  item.status === "Completed"
                    ? "bg-green-500 border-green-200"
                    : item.status === "In Progress"
                    ? "bg-blue-600 border-blue-200"
                    : item.status === "AI Recommended"
                    ? "bg-purple-600 border-purple-200"
                    : "bg-slate-300 border-slate-100"
                }
              `}
            />

            {/* Roadmap Card */}
            <div className="flex-1">
              <RoadmapCard
                month={item.month}
                title={item.title}
                difficulty={item.difficulty}
                duration={item.duration}
                status={item.status}
                progress={item.progress}
                active={
                  item.status ===
                  "AI Recommended"
                }
              />

              {/* Progress Button */}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() =>
                    handleProgress(
                      item._id,
                      item.progress
                    )
                  }
                  disabled={
                    item.progress >= 100
                  }
                  className={`
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-medium
                    transition
                    ${
                      item.progress >= 100
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }
                  `}
                >
                  {item.progress >= 100
                    ? "Completed"
                    : `Update Progress (+10%)`}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import RoadmapHeader from "@/components/roadmap/RoadmapHeader";
import RoadmapTimeline from "@/components/roadmap/RoadmapTimeline";

import ProgressWidget from "@/components/roadmap/ProgressWidget";
import LearningVelocity from "@/components/roadmap/LearningVelocity";
import AIRecommendation from "@/components/roadmap/AIRecommendation";

import { getRoadmap } from "@/services/roadmapService";

interface RoadmapItem {
  _id: string;
  month: string;
  title: string;
  difficulty: string;
  duration: string;
  status: string;
  progress: number;
}

export default function LearningPage() {
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRoadmap = async () => {
    try {
      const data = await getRoadmap(
        "PLC Technician"
      );
  
      console.log(data);
  
      setRoadmap(data.roadmap || []);
    } catch (error: any) {
      console.log(
        "FETCH ERROR:",
        error.response?.data
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <TopNavbar />

          <div className="px-6 lg:px-8 py-8">
            {/* Header */}
            <RoadmapHeader />

            <div
              className="
                mt-8
                grid
                grid-cols-1
                xl:grid-cols-12
                gap-6
              "
            >
              {/* Roadmap Section */}
              <section className="xl:col-span-8">
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
                  {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                      <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />

                      <p className="text-slate-500">
                        Loading roadmap...
                      </p>
                    </div>
                  ) : (
                    <RoadmapTimeline roadmap={roadmap} />
                  )}
                </div>
              </section>

              {/* Right Sidebar */}
              <aside
                className="
                  xl:col-span-4
                  space-y-6
                  xl:sticky
                  xl:top-6
                  h-fit
                "
              >
                <ProgressWidget />

                <LearningVelocity />

                <AIRecommendation />
              </aside>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
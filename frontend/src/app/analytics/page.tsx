"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import AnalyticsKPICards from "@/components/analytics/AnalyticsKPICards";

import LearningTrendChart from "@/components/analytics/LearningTrendChart";
import SkillGrowthChart from "@/components/analytics/SkillGrowthChart";

import DepartmentComparisonChart from "@/components/analytics/DepartmentComparisonChart";
import CourseCompletionChart from "@/components/analytics/CourseCompletionChart";

import InsightsPanel from "@/components/analytics/InsightsPanel";

import { getAnalytics } from "@/services/analyticsService";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const data = await getAnalytics();

      setAnalytics(data.analytics);
    } catch (error) {
      console.error(
        "Failed to fetch analytics:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <TopNavbar />

          <div className="max-w-[1700px] mx-auto px-8 py-8">
            {/* Header */}
            <AnalyticsHeader />

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />

                <p className="text-slate-500">
                  Loading Analytics...
                </p>
              </div>
            ) : (
              <>
                {/* KPI Section */}
                <section className="mt-8">
                  <AnalyticsKPICards
                    totalAssessments={
                      analytics?.totalAssessments || 0
                    }
                    averageScore={
                      analytics?.averageScore || 0
                    }
                    highestScore={
                      analytics?.highestScore || 0
                    }
                  />
                </section>

                {/* Row 1 */}
                <section className="grid grid-cols-12 gap-6 mt-8">
                  <div className="col-span-12 xl:col-span-8">
                    <LearningTrendChart />
                  </div>

                  <div className="col-span-12 xl:col-span-4">
                    <SkillGrowthChart />
                  </div>
                </section>

                {/* Row 2 */}
                <section className="grid grid-cols-12 gap-6 mt-6">
                  <div className="col-span-12 xl:col-span-8">
                    <DepartmentComparisonChart />
                  </div>

                  <div className="col-span-12 xl:col-span-4">
                    <CourseCompletionChart />
                  </div>
                </section>

                {/* AI Insights */}
                <section className="mt-6 mb-8">
                  <InsightsPanel />
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
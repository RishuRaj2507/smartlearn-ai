"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import StatsCard from "@/components/dashboard/StatsCard";
import CourseCard from "@/components/dashboard/CourseCard";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import SessionCard from "@/components/dashboard/SessionCard";
import BadgeCard from "@/components/dashboard/BadgeCard";
import SkillRadarChart from "@/components/dashboard/SkillRadarChart";
import AICoachCard from "@/components/dashboard/AICoachCard";
import RecommendationCard from "@/components/dashboard/RecommendationCard";

import {
  getDashboardStats,
} from "@/services/dashboardService";

export default function DashboardPage() {
  const [stats, setStats] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const data =
            await getDashboardStats();

          setStats(data.stats);
        } catch (error) {
          console.error(
            "Dashboard Error:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchStats();
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-[#F5F7FB]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <TopNavbar />

          <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 py-6">

            {/* KPI SECTION */}
            <section className="mb-8">
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-4
                  gap-5
                "
              >
                <StatsCard
                  title="Total Users"
                  value={
                    loading
                      ? "..."
                      : stats?.totalUsers || 0
                  }
                  subtitle="Registered Users"
                />

                <StatsCard
                  title="Assessments"
                  value={
                    loading
                      ? "..."
                      : stats?.totalAssessments || 0
                  }
                  subtitle="Completed"
                />

                <StatsCard
                  title="Documents"
                  value={
                    loading
                      ? "..."
                      : stats?.totalDocuments || 0
                  }
                  subtitle="Knowledge Base"
                />

                <StatsCard
                  title="Average Score"
                  value={
                    loading
                      ? "..."
                      : `${stats?.averageScore || 0}%`
                  }
                  subtitle="Assessment Average"
                />
              </div>
            </section>

            {/* LEARNING PATH + AI COACH */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-slate-900">
                  Recommended Learning Path
                </h2>
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  xl:grid-cols-12
                  gap-5
                "
              >
                {/* Courses */}
                <div className="xl:col-span-9">
                  <div
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      2xl:grid-cols-3
                      gap-5
                    "
                  >
                    <CourseCard
                      title="Advanced PLC Logic"
                      progress={65}
                      image="/images/plc.jpg"
                      category="Automation"
                      duration="6 Hours"
                      level="Advanced"
                    />

                    <CourseCard
                      title="Predictive Maintenance"
                      progress={15}
                      image="/images/maintenance.jpg"
                      category="Maintenance"
                      duration="8 Hours"
                      level="Intermediate"
                    />

                    <CourseCard
                      title="Hydraulic Systems II"
                      progress={0}
                      image="/images/hydraulics.jpg"
                      category="Hydraulics"
                      duration="5 Hours"
                      level="Beginner"
                    />
                  </div>
                </div>

                {/* AI Coach */}
                <div className="xl:col-span-3">
                  <AICoachCard />
                </div>
              </div>
            </section>

            {/* ANALYTICS */}
            <section className="mb-8">
              <div
                className="
                  grid
                  grid-cols-1
                  xl:grid-cols-12
                  gap-5
                "
              >
                <div className="xl:col-span-4">
                  <SkillRadarChart />
                </div>

                <div className="xl:col-span-4">
                  <AIInsightCard />
                </div>

                <div className="xl:col-span-4">
                  <SessionCard />
                </div>
                <div className="xl:col-span-4">
                  <RecommendationCard />
                </div>
              </div>
            </section>

            {/* BADGES */}
            <section>
              <BadgeCard />
            </section>

          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
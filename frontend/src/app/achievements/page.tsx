"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import AchievementsHeader from "@/components/achievements/AchievementsHeader";
import LearningXPTracker from "@/components/achievements/LearningXPTracker";
import CertificationGrid from "@/components/achievements/CertificationGrid";
import BadgeCollection from "@/components/achievements/BadgeCollection";
import LeaderboardCard from "@/components/achievements/LeaderboardCard";
import CareerMilestones from "@/components/achievements/CareerMilestones";

export default function AchievementsPage() {
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
            <AchievementsHeader />

            {/* XP Tracker */}
            <div className="mt-8">
              <LearningXPTracker />
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <CertificationGrid />
            </div>

            {/* Badges + Leaderboard + Milestones */}
            <div className="grid grid-cols-12 gap-6 mt-8">
              <div className="col-span-12 xl:col-span-4">
                <BadgeCollection />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <LeaderboardCard />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <CareerMilestones />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
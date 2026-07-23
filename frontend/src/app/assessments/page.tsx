"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import AssessmentHeader from "@/components/assessments/AssessmentHeader";
import AssessmentStats from "@/components/assessments/AssessmentStats";
import AssessmentList from "@/components/assessments/AssessmentList";
import RecentScores from "@/components/assessments/RecentScores";
import SkillReadinessChart from "@/components/assessments/SkillReadinessChart";
import CertificationTracker from "@/components/assessments/CertificationTracker";
import AssessmentInsights from "@/components/assessments/AssessmentInsights";

export default function AssessmentsPage() {
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
            <AssessmentHeader />

            {/* KPI Cards */}
            <div className="mt-8">
              <AssessmentStats />
            </div>

            {/* Featured Banner */}
            <div
              className="
                mt-8
                rounded-3xl
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                p-8
                text-white
              "
            >
              <h2 className="text-3xl font-bold">
                Certification Readiness
              </h2>

              <p className="mt-3 text-blue-100 max-w-3xl">
                Complete pending assessments and improve your
                readiness score to unlock Advanced Industrial
                Automation Certification.
              </p>

              <button
                className="
                  mt-6
                  px-6
                  py-3
                  rounded-xl
                  bg-white
                  text-blue-700
                  font-medium
                  hover:bg-slate-100
                  transition
                "
              >
                View Certification Path
              </button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6 mt-8">
              
              {/* Left Section */}
              <div className="col-span-12 xl:col-span-8 space-y-6">
                
                <div
                  className="
                    bg-white
                    dark:bg-slate-900
                    border
                    border-slate-200
                    dark:border-slate-800
                    rounded-3xl
                    p-6
                  "
                >
                  <div className="flex items-center justify-between mb-6">
                    
                    <h3 className="text-xl font-semibold">
                      Assessment Center
                    </h3>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-blue-100
                        text-blue-700
                        text-sm
                        font-medium
                      "
                    >
                      3 Active
                    </span>

                  </div>

                  <AssessmentList />
                </div>

                <SkillReadinessChart />
              </div>

              {/* Right Section */}
              <div className="col-span-12 xl:col-span-4 space-y-6">
                
                <RecentScores />

                <CertificationTracker />

                <AssessmentInsights />

              </div>

            </div>

          </div>

        </main>

      </div>
    </ProtectedRoute>
  );
}
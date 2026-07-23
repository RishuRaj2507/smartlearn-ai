"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import AdminHeader from "@/components/admin/AdminHeader";
import EmployeeOverview from "@/components/admin/EmployeeOverview";
import EmployeeTable from "@/components/admin/EmployeeTable";

import TrainingProgress from "@/components/admin/TrainingProgress";
import SkillGapHeatmap from "@/components/admin/SkillGapHeatmap";
import DepartmentAnalytics from "@/components/admin/DepartmentAnalytics";
import CourseManagement from "@/components/admin/CourseManagement";
import AIInsightsPanel from "@/components/admin/AIInsightsPanel";
import RecentActivities from "@/components/admin/RecentActivities";


export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <TopNavbar />

          <div className="max-w-[1700px] mx-auto p-8">
            {/* Header */}
            <AdminHeader />

            {/* Employee Overview */}
            <div className="mt-8">
              <EmployeeOverview />
            </div>

            {/* Employee Table + AI Insights */}
            <div className="grid grid-cols-12 gap-6 mt-8">
              <div className="col-span-12 xl:col-span-8">
                <EmployeeTable />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <AIInsightsPanel />
              </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-12 gap-6 mt-6">
              <div className="col-span-12 xl:col-span-4">
                <TrainingProgress />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <DepartmentAnalytics />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <SkillGapHeatmap />
              </div>
            </div>

            {/* Course Management + Activities */}
            <div className="grid grid-cols-12 gap-6 mt-6">
              <div className="col-span-12 xl:col-span-7">
                <CourseManagement />
              </div>

              <div className="col-span-12 xl:col-span-5">
                <RecentActivities />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
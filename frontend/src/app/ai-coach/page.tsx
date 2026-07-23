"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import AICoachHeader from "@/components/aicoach/AICoachHeader";
import ChatWindow from "@/components/aicoach/ChatWindow";
import ChatInput from "@/components/aicoach/ChatInput";
import QuickPrompts from "@/components/aicoach/QuickPrompts";
import AIInsights from "@/components/aicoach/AIInsights";

export default function AICoachPage() {
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
            <AICoachHeader />

            {/* Main Layout */}
            <div className="grid grid-cols-12 gap-6 mt-8">
              
              {/* Chat Section */}
              <div className="col-span-12 xl:col-span-8">
                
                <ChatWindow />

                <div className="mt-4">
                  <ChatInput />
                </div>

              </div>

              {/* Right Panel */}
              <div className="col-span-12 xl:col-span-4 space-y-6">
                
                <QuickPrompts />

                <AIInsights />

              </div>

            </div>

          </div>

        </main>

      </div>
    </ProtectedRoute>
  );
}
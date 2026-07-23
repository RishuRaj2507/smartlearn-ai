import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import KnowledgeHeader from "@/components/knowledge/KnowledgeHeader";
import KnowledgeSearch from "@/components/knowledge/KnowledgeSearch";
import KnowledgeCategories from "@/components/knowledge/KnowledgeCategories";
import KnowledgeLibrary from "@/components/knowledge/KnowledgeLibrary";
import RecentDocuments from "@/components/knowledge/RecentDocuments";

export default function KnowledgePage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

        <TopNavbar />

        <div className="max-w-[1700px] mx-auto px-8 py-8">

          {/* Header */}
          <KnowledgeHeader />

          {/* Search */}
          <div className="mt-8">
            <KnowledgeSearch />
          </div>

          {/* Categories */}
          <div className="mt-6">
            <KnowledgeCategories />
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
              Featured Learning Resource
            </h2>

            <p className="mt-3 text-blue-100 max-w-3xl">
              Complete the Industrial Automation Master Guide
              to accelerate your competency growth and unlock
              advanced certifications.
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
              Open Resource
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-6 mt-8">

            {/* Library */}
            <div className="col-span-12 xl:col-span-8">

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

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Knowledge Library
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
                    248 Documents
                  </span>

                </div>

                <KnowledgeLibrary />

              </div>

            </div>

            {/* Right Panel */}
            <div className="col-span-12 xl:col-span-4 space-y-6">

              <RecentDocuments />

              {/* AI Recommendation */}
              <div
                className="
                  rounded-3xl
                  bg-gradient-to-br
                  from-slate-900
                  to-slate-800
                  text-white
                  p-6
                "
              >
                <h3 className="text-xl font-semibold mb-4">
                  AI Recommendation
                </h3>

                <p className="text-slate-300 leading-7">
                  Based on your recent assessments,
                  reviewing the Hydraulic SOP Manual
                  could improve your competency score
                  by approximately 8%.
                </p>

                <button
                  className="
                    mt-5
                    px-5
                    py-3
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                  "
                >
                  View Recommendation
                </button>
              </div>

              {/* Statistics */}
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
                <h3 className="font-semibold text-lg mb-5">
                  Usage Statistics
                </h3>

                <div className="space-y-5">

                  <div>
                    <p className="text-slate-500 text-sm">
                      Documents Read
                    </p>

                    <h4 className="text-2xl font-bold">
                      46
                    </h4>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">
                      Learning Hours
                    </p>

                    <h4 className="text-2xl font-bold">
                      128h
                    </h4>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">
                      Resources Saved
                    </p>

                    <h4 className="text-2xl font-bold">
                      18
                    </h4>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
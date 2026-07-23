"use client";

interface AnalyticsKPICardsProps {
  totalAssessments: number;
  averageScore: number;
  highestScore: number;
}

export default function AnalyticsKPICards({
  totalAssessments,
  averageScore,
  highestScore,
}: AnalyticsKPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Total Assessments */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h3 className="text-sm text-slate-500">
          Total Assessments
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalAssessments}
        </p>
      </div>


      {/* Average Score */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h3 className="text-sm text-slate-500">
          Average Score
        </h3>

        <p className="text-3xl font-bold mt-2">
          {averageScore}%
        </p>
      </div>


      {/* Highest Score */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h3 className="text-sm text-slate-500">
          Highest Score
        </h3>

        <p className="text-3xl font-bold mt-2">
          {highestScore}%
        </p>
      </div>

    </div>
  );
}
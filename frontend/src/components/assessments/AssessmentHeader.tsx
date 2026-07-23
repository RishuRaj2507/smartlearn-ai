import { ClipboardCheck } from "lucide-react";

export default function AssessmentHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Assessments & Certifications
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Evaluate competency, track progress and unlock certifications.
        </p>

      </div>

      <button
        className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-medium
        "
      >
        <ClipboardCheck size={18} />
        Start Assessment
      </button>

    </div>
  );
}
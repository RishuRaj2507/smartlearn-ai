import { Brain } from "lucide-react";

export default function SkillHeader() {
  return (
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">

        <div className="p-3 bg-blue-100 rounded-xl">
          <Brain className="text-blue-600" size={22} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Skill Gap Analysis
          </h1>

          <p className="text-slate-500 dark:text-slate-400">
            AI-powered competency assessment and recommendations
          </p>
        </div>

      </div>

    </div>
  );
}
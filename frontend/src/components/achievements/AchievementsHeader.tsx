export default function AchievementsHeader() {
    return (
      <div className="flex items-center justify-between">
  
        <div>
  
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Achievements & Certifications
          </h1>
  
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Track certifications, badges, milestones and learning accomplishments.
          </p>
  
        </div>
  
        <div
          className="
            px-4
            py-2
            rounded-xl
            bg-green-100
            dark:bg-green-500/10
            text-green-700
            dark:text-green-400
            font-medium
          "
        >
          Level 4 Learner
        </div>
  
      </div>
    );
  }
export default function LearningXPTracker() {
    const xp = 2850;
    const nextLevel = 3500;
    const progress = (xp / nextLevel) * 100;
  
    return (
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
        <p className="text-slate-500 text-sm">
          Learning XP
        </p>
  
        <h2 className="text-5xl font-bold mt-2 text-slate-900 dark:text-white">
          {xp}
        </h2>
  
        <div className="mt-5 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
  
          <div
            className="h-full bg-blue-600"
            style={{ width: `${progress}%` }}
          />
  
        </div>
  
        <p className="mt-3 text-sm text-slate-500">
          {nextLevel - xp} XP remaining to reach Level 5
        </p>
      </div>
    );
  }
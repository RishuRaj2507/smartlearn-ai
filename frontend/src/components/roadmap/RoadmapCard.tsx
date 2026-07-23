interface RoadmapCardProps {
    month: string;
    title: string;
    difficulty: string;
    duration: string;
    status: string;
    progress: number;
    active?: boolean;
  }
  
  export default function RoadmapCard({
    month,
    title,
    difficulty,
    duration,
    status,
    progress,
    active = false,
  }: RoadmapCardProps) {
    const getStatusColor = () => {
      switch (status) {
        case "Completed":
          return "bg-green-100 text-green-700";
  
        case "In Progress":
          return "bg-blue-100 text-blue-700";
  
        case "Recommended":
          return "bg-purple-100 text-purple-700";
  
        case "Locked":
          return "bg-slate-100 text-slate-600";
  
        default:
          return "bg-amber-100 text-amber-700";
      }
    };
  
    return (
      <div
        className={`
          rounded-2xl
          border
          shadow-sm
          p-6
          transition-all
          duration-300
          hover:shadow-lg
          ${
            active
              ? "border-blue-500 bg-blue-50/70 dark:bg-blue-950/20"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="
              text-xs
              font-semibold
              tracking-wide
              px-3
              py-1
              rounded-full
              bg-slate-100
              text-slate-700
              dark:bg-slate-800
              dark:text-slate-300
            "
          >
            {month}
          </span>
  
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor()}`}
          >
            {status}
          </span>
        </div>
  
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
          {title}
        </h3>
  
        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Difficulty
            </p>
  
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {difficulty}
            </p>
          </div>
  
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Duration
            </p>
  
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {duration}
            </p>
          </div>
        </div>
  
        {/* Progress */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Progress
          </span>
  
          <span className="font-semibold text-blue-600">
            {progress}%
          </span>
        </div>
  
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-5">
          <div
            className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-blue-700
              rounded-full
            "
            style={{ width: `${progress}%` }}
          />
        </div>
  
        {/* Footer */}
        <button
          className={`
            w-full
            py-3
            rounded-xl
            font-medium
            text-sm
            transition-all
            ${
              progress > 0
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            }
          `}
        >
          {progress > 0 ? "Continue Module" : "Start Module"}
        </button>
      </div>
    );
  }
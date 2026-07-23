interface CourseCardProps {
  title: string;
  progress: number;
  image: string;
  category: string;
  duration: string;
  level: string;
}

export default function CourseCard({
  title,
  progress,
  image,
  category,
  duration,
  level,
}: CourseCardProps) {
  const levelColor =
    level === "Advanced"
      ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
      : level === "Intermediate"
      ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
      : "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400";

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-2xl
        overflow-hidden
        border
        border-slate-200
        dark:border-slate-800
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        h-full
        flex
        flex-col
      "
    >
      {/* COURSE IMAGE */}
      <div className="relative h-44 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Category */}
        <span
          className="
            absolute
            top-3
            left-3
            bg-white/90
            text-slate-800
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
          "
        >
          {category}
        </span>

        {/* AI Badge */}
        <span
          className="
            absolute
            top-3
            right-3
            bg-blue-600
            text-white
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
            shadow-md
          "
        >
          AI Recommended
        </span>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">

          <h3 className="text-white text-lg font-semibold leading-snug">
            {title}
          </h3>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        {/* Course Info */}
        <div className="flex justify-between items-start mb-5">

          <div>
            <p className="text-xs text-slate-400">
              Duration
            </p>

            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {duration}
            </p>
          </div>

          <span
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              ${levelColor}
            `}
          >
            {level}
          </span>

        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-2">

          <span className="text-sm text-slate-500 dark:text-slate-400">
            Progress
          </span>

          <span className="font-semibold text-blue-600 text-sm">
            {progress}%
          </span>

        </div>

        {/* Progress Bar */}
        <div
          className="
            w-full
            h-2
            bg-slate-200
            dark:bg-slate-700
            rounded-full
            overflow-hidden
            mb-5
          "
        >
          <div
            className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              rounded-full
              transition-all
              duration-700
            "
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-5">

          <div className="flex items-center gap-1">

            <span className="text-amber-500 text-sm">
              ★★★★★
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              4.8
            </span>

          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            1.2k Learners
          </span>

        </div>

        {/* CTA */}
        <div className="mt-auto">

          <button
            className="
              w-full
              py-3
              rounded-xl
              font-medium
              text-sm
              text-white
              bg-blue-600
              hover:bg-blue-700
              transition-all
              duration-300
              shadow-sm
            "
          >
            {progress > 0
              ? "Continue Learning"
              : "Start Learning"}
          </button>

        </div>

      </div>
    </div>
  );
}
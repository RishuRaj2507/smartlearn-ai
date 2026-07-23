interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
}: StatsCardProps) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        rounded-2xl
        p-5
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <p
          className="
            text-sm
            font-medium
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </p>

        {subtitle && (
          <span
            className="
              text-xs
              font-semibold
              px-2.5
              py-1
              rounded-full
              bg-blue-50
              text-blue-700
              dark:bg-blue-500/15
              dark:text-blue-400
            "
          >
            {subtitle}
          </span>
        )}

      </div>

      {/* KPI Value */}
      <div className="mt-4">

        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          {value}
        </h2>

      </div>

      {/* Decorative Progress Line */}
      <div
        className="
          mt-4
          h-1
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
        "
      />
    </div>
  );
}
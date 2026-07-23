import {
  Award,
  ShieldCheck,
  Cpu,
  Zap,
  Trophy,
} from "lucide-react";

export default function BadgeCard() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Safety Champion",
      date: "Oct 2025",
      points: "+50 XP",
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-500/10",
    },
    {
      icon: Cpu,
      title: "PLC Specialist",
      date: "Sep 2025",
      points: "+75 XP",
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      icon: Zap,
      title: "Learning Streak",
      date: "15 Days",
      points: "+25 XP",
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-500/10",
    },
  ];

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        rounded-2xl
        shadow-sm
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-green-100
              dark:bg-green-500/10
              flex
              items-center
              justify-center
            "
          >
            <Trophy
              size={20}
              className="text-green-600"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Recent Achievements
            </h3>

            <p className="text-xs text-slate-500">
              Learning milestones & certifications
            </p>
          </div>

        </div>

        <span
          className="
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
            bg-green-50
            dark:bg-green-500/10
            text-green-600
          "
        >
          3 Earned
        </span>

      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {badges.map((badge, index) => {
          const Icon = badge.icon;

          return (
            <div
              key={index}
              className={`
                ${badge.bg}
                rounded-2xl
                p-5
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              `}
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-white
                  dark:bg-slate-800
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  mb-4
                "
              >
                <Icon
                  size={28}
                  className={badge.color}
                />
              </div>

              <h4 className="font-semibold text-slate-900 dark:text-white">
                {badge.title}
              </h4>

              <p className="text-xs text-slate-500 mt-2">
                Earned • {badge.date}
              </p>

              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  px-3
                  py-1
                  rounded-full
                  bg-white
                  dark:bg-slate-800
                  text-xs
                  font-semibold
                  text-blue-600
                "
              >
                {badge.points}
              </div>
            </div>
          );
        })}

      </div>

      {/* Learning Statistics */}
      <div className="grid grid-cols-3 gap-4 mt-8">

        <div
          className="
            bg-slate-50
            dark:bg-slate-800
            rounded-xl
            p-4
            text-center
          "
        >
          <p className="text-xs text-slate-500">
            Total XP
          </p>

          <h3 className="text-xl font-bold text-blue-600 mt-1">
            1,245
          </h3>
        </div>

        <div
          className="
            bg-slate-50
            dark:bg-slate-800
            rounded-xl
            p-4
            text-center
          "
        >
          <p className="text-xs text-slate-500">
            Badges Earned
          </p>

          <h3 className="text-xl font-bold text-green-600 mt-1">
            18
          </h3>
        </div>

        <div
          className="
            bg-slate-50
            dark:bg-slate-800
            rounded-xl
            p-4
            text-center
          "
        >
          <p className="text-xs text-slate-500">
            Rank
          </p>

          <h3 className="text-xl font-bold text-purple-600 mt-1">
            #24
          </h3>
        </div>

      </div>

      {/* Certification Progress */}
      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="text-sm text-slate-600 dark:text-slate-400">
            Advanced Maintenance Certification
          </span>

          <span className="text-sm font-semibold text-blue-600">
            75%
          </span>

        </div>

        <div
          className="
            w-full
            h-3
            bg-slate-200
            dark:bg-slate-700
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              rounded-full
            "
            style={{ width: "75%" }}
          />
        </div>

        <p className="text-xs text-slate-500 mt-3">
          Complete 2 additional learning modules to unlock
          the Advanced Maintenance Certification.
        </p>

      </div>
    </div>
  );
}
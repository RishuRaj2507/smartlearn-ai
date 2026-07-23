const badges = [
    {
      icon: "🏆",
      title: "Safety Champion",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "⚡",
      title: "Learning Streak",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🛠",
      title: "Maintenance Expert",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🤖",
      title: "AI Learner",
      color: "bg-green-50 border-green-200",
    },
  ];
  
  export default function BadgeCollection() {
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
        <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
          Badge Collection
        </h3>
  
        <div className="grid grid-cols-2 gap-4">
  
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`
                ${badge.color}
                border
                rounded-2xl
                p-5
                text-center
              `}
            >
              <div className="text-4xl mb-3">
                {badge.icon}
              </div>
  
              <p className="font-medium text-slate-900">
                {badge.title}
              </p>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  
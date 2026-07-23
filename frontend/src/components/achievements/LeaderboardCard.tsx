const leaderboard = [
    {
      name: "Alex Rivera",
      xp: "2850 XP",
      rank: 1,
    },
    {
      name: "Sarah Chen",
      xp: "2700 XP",
      rank: 2,
    },
    {
      name: "Mike Johnson",
      xp: "2590 XP",
      rank: 3,
    },
  ];
  
  export default function LeaderboardCard() {
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
          Leaderboard
        </h3>
  
        <div className="space-y-4">
  
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-xl
                bg-slate-50
                dark:bg-slate-800
              "
            >
              <div className="flex items-center gap-4">
  
                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-semibold
                  "
                >
                  #{user.rank}
                </div>
  
                <span className="font-medium">
                  {user.name}
                </span>
  
              </div>
  
              <span className="text-blue-600 font-semibold">
                {user.xp}
              </span>
  
            </div>
          ))}
  
        </div>
      </div>
    );
  }
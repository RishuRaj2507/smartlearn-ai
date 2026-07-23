export default function RecentScores() {
    const scores = [
      { skill: "PLC", score: "88%" },
      { skill: "Safety", score: "92%" },
      { skill: "Hydraulics", score: "65%" },
      { skill: "Automation", score: "81%" },
    ];
  
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
        <h3 className="text-lg font-semibold mb-5">
          Recent Scores
        </h3>
  
        <div className="space-y-4">
  
          {scores.map((item) => (
            <div
              key={item.skill}
              className="flex justify-between"
            >
              <span>{item.skill}</span>
  
              <span className="font-semibold">
                {item.score}
              </span>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
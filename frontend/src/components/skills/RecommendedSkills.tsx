export default function RecommendedSkills() {
    const recommendations = [
      "Advanced PLC Systems",
      "Hydraulic Systems II",
      "Process Optimization",
      "Industrial Automation",
    ];
  
    return (
      <div
        className="
          bg-white
          dark:bg-slate-900
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          p-6
        "
      >
        <h3 className="text-xl font-semibold mb-5">
          Recommended Learning
        </h3>
  
        <div className="space-y-3">
  
          {recommendations.map((item) => (
            <div
              key={item}
              className="
                p-4
                rounded-xl
                bg-slate-50
                dark:bg-slate-800
              "
            >
              {item}
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  
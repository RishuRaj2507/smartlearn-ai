export default function AssessmentStats() {
    const stats = [
      {
        title: "Completed",
        value: "18",
      },
      {
        title: "Average Score",
        value: "84%",
      },
      {
        title: "Certifications",
        value: "6",
      },
      {
        title: "Pending",
        value: "3",
      },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-6">
  
        {stats.map((item) => (
          <div
            key={item.title}
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
              {item.title}
            </p>
  
            <h2 className="text-3xl font-bold mt-3">
              {item.value}
            </h2>
  
          </div>
        ))}
  
      </div>
    );
  }
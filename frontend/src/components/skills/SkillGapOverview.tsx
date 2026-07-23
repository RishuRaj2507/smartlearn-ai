export default function SkillGapOverview() {
    const stats = [
      {
        title: "Overall Skill Score",
        value: "78%",
        color: "blue",
      },
      {
        title: "Skills Assessed",
        value: "24",
        color: "green",
      },
      {
        title: "Critical Gaps",
        value: "3",
        color: "red",
      },
      {
        title: "Ready For Promotion",
        value: "82%",
        color: "purple",
      },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-6 mb-8">
  
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              p-5
            "
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>
  
            <h2 className="text-3xl font-bold mt-3 text-slate-900 dark:text-white">
              {item.value}
            </h2>
          </div>
        ))}
  
      </div>
    );
  }
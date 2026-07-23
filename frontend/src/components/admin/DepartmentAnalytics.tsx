export default function DepartmentAnalytics() {
    const departments = [
      {
        name: "Production",
        score: "88%",
      },
      {
        name: "Maintenance",
        score: "76%",
      },
      {
        name: "Quality",
        score: "91%",
      },
      {
        name: "Safety",
        score: "95%",
      },
    ];
  
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
  
        <h3 className="text-xl font-semibold mb-5">
          Department Analytics
        </h3>
  
        <div className="space-y-4">
  
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="flex justify-between"
            >
              <span>{dept.name}</span>
              <span className="font-semibold">
                {dept.score}
              </span>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }
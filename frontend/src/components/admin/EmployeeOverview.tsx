export default function EmployeeOverview() {
    const stats = [
      {
        title: "Employees",
        value: "1,248",
      },
      {
        title: "Active Learners",
        value: "934",
      },
      {
        title: "Certifications",
        value: "387",
      },
      {
        title: "Completion Rate",
        value: "84%",
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
              rounded-3xl
              border
              border-slate-200
              dark:border-slate-800
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
  
export default function RecentActivities() {
    const activities = [
      "Alex Rivera completed PLC Fundamentals",
      "Emma Wilson earned Safety Certification",
      "Hydraulic Systems II assigned to 48 employees",
      "Quality Department reached 91% completion",
      "New Automation course published",
    ];
  
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
  
        <h3 className="text-xl font-semibold mb-5">
          Recent Activities
        </h3>
  
        <div className="space-y-4">
  
          {activities.map((activity, index) => (
            <div
              key={index}
              className="
                flex
                gap-3
                items-start
              "
            >
              <div
                className="
                  w-3
                  h-3
                  mt-1.5
                  rounded-full
                  bg-blue-600
                "
              />
  
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {activity}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }
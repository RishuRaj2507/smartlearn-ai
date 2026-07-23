const milestones = [
    {
      title: "Level 1 Technician",
      status: "Completed",
    },
    {
      title: "Level 2 Specialist",
      status: "Completed",
    },
    {
      title: "Level 3 Senior Technician",
      status: "Current",
    },
    {
      title: "Level 4 Team Lead",
      status: "Locked",
    },
  ];
  
  export default function CareerMilestones() {
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
          Career Milestones
        </h3>
  
        <div className="space-y-5">
  
          {milestones.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-between
                pb-4
                border-b
                border-slate-100
                dark:border-slate-800
              "
            >
              <span className="font-medium">
                {item.title}
              </span>
  
              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium
                  ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Current"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }
                `}
              >
                {item.status}
              </span>
            </div>
          ))}
  
        </div>
      </div>
    );
  }
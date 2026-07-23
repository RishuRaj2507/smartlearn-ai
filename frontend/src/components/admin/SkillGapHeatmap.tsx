export default function SkillGapHeatmap() {
    const skills = [
      { name: "PLC", gap: "Low" },
      { name: "Safety", gap: "Low" },
      { name: "Hydraulics", gap: "High" },
      { name: "Automation", gap: "Medium" },
    ];
  
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
  
        <h3 className="text-xl font-semibold mb-5">
          Skill Gap Heatmap
        </h3>
  
        <div className="space-y-4">
  
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex justify-between"
            >
              <span>{skill.name}</span>
  
              <span
                className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${
                    skill.gap === "High"
                      ? "bg-red-100 text-red-700"
                      : skill.gap === "Medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                {skill.gap}
              </span>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }
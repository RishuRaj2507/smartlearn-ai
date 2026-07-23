const skills = [
    {
      skill: "PLC Programming",
      current: 75,
      target: 90,
    },
    {
      skill: "Hydraulics",
      current: 60,
      target: 85,
    },
    {
      skill: "Automation",
      current: 80,
      target: 90,
    },
    {
      skill: "Safety",
      current: 95,
      target: 95,
    },
  ];
  
  export default function SkillMatrix() {
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
        <h3 className="text-xl font-semibold mb-6">
          Competency Matrix
        </h3>
  
        <div className="space-y-5">
  
          {skills.map((skill) => (
            <div key={skill.skill}>
  
              <div className="flex justify-between mb-2">
  
                <span>{skill.skill}</span>
  
                <span>
                  {skill.current}% / {skill.target}%
                </span>
  
              </div>
  
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
  
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{
                    width: `${skill.current}%`,
                  }}
                />
  
              </div>
  
            </div>
          ))}
  
        </div>
      </div>
    );
  }
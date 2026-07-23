const prompts = [
    "Improve PLC Skills",
    "Hydraulics Learning Plan",
    "Certification Advice",
    "Career Growth Suggestions",
  ];
  
  export default function QuickPrompts() {
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
        <h3 className="font-semibold mb-5">
          Quick Prompts
        </h3>
  
        <div className="grid gap-3">
  
          {prompts.map((prompt) => (
            <button
              key={prompt}
              className="
                text-left
                px-4
                py-3
                rounded-xl
                bg-slate-50
                dark:bg-slate-800
                hover:bg-blue-50
                transition
              "
            >
              {prompt}
            </button>
          ))}
  
        </div>
      </div>
    );
  }
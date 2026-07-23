const categories = [
    "PLC Systems",
    "Hydraulics",
    "Safety",
    "Automation",
    "Maintenance",
    "Lean Manufacturing",
  ];
  
  export default function KnowledgeCategories() {
    return (
      <div className="flex flex-wrap gap-3">
  
        {categories.map((category) => (
          <button
            key={category}
            className="
              px-4
              py-2
              rounded-xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              hover:border-blue-500
              hover:text-blue-600
              transition
            "
          >
            {category}
          </button>
        ))}
  
      </div>
    );
  }
  
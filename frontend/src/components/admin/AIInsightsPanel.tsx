export default function AIInsightsPanel() {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 h-full">
  
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
          AI INSIGHTS
        </span>
  
        <h3 className="text-2xl font-bold mt-5">
          Workforce Learning Alert
        </h3>
  
        <p className="mt-3 text-slate-500 leading-7">
          Hydraulics competency across the Maintenance
          department is 18% below target benchmark.
        </p>
  
        <div className="mt-6 bg-blue-50 dark:bg-slate-800 rounded-2xl p-4">
          <p className="text-sm">
            Recommended Action:
          </p>
  
          <p className="font-semibold mt-2">
            Assign "Hydraulic Systems II" to 48 employees.
          </p>
        </div>
  
        <button
          className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-blue-600
            text-white
          "
        >
          View Recommendations
        </button>
  
      </div>
    );
  }
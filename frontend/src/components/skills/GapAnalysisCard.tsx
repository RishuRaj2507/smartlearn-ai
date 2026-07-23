export default function GapAnalysisCard() {
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
        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
          HIGH PRIORITY
        </span>
  
        <h3 className="text-2xl font-bold mt-5">
          Hydraulics Gap Detected
        </h3>
  
        <p className="mt-3 text-slate-500 leading-6">
          Your hydraulics competency is 25% below the
          required benchmark for Production Engineer II.
        </p>
  
        <div className="mt-6">
  
          <div className="flex justify-between mb-2">
            <span>Current</span>
            <span>60%</span>
          </div>
  
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-red-500 w-[60%]" />
          </div>
  
          <div className="flex justify-between mb-2">
            <span>Target</span>
            <span>85%</span>
          </div>
  
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[85%]" />
          </div>
  
        </div>
      </div>
    );
  }
  
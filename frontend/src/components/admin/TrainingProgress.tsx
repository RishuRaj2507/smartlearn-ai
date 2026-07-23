export default function TrainingProgress() {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
  
        <h3 className="text-xl font-semibold mb-5">
          Training Progress
        </h3>
  
        <div className="space-y-5">
  
          <div>
            <div className="flex justify-between mb-2">
              <span>PLC Fundamentals</span>
              <span>92%</span>
            </div>
  
            <div className="h-3 bg-slate-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: "92%" }}
              />
            </div>
          </div>
  
          <div>
            <div className="flex justify-between mb-2">
              <span>Lean Manufacturing</span>
              <span>74%</span>
            </div>
  
            <div className="h-3 bg-slate-200 rounded-full">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: "74%" }}
              />
            </div>
          </div>
  
          <div>
            <div className="flex justify-between mb-2">
              <span>Hydraulics</span>
              <span>51%</span>
            </div>
  
            <div className="h-3 bg-slate-200 rounded-full">
              <div
                className="h-full bg-amber-500 rounded-full"
                style={{ width: "51%" }}
              />
            </div>
          </div>
  
        </div>
  
      </div>
    );
  }
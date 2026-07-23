export default function RecentDocuments() {
    const docs = [
      "PLC Advanced Programming",
      "Hydraulic Troubleshooting",
      "Safety Inspection Checklist",
      "Maintenance Audit Report",
    ];
  
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
        <h3 className="font-semibold text-lg mb-5">
          Recently Accessed
        </h3>
  
        <div className="space-y-4">
  
          {docs.map((doc) => (
            <div
              key={doc}
              className="
                p-3
                rounded-xl
                bg-slate-50
                dark:bg-slate-800
              "
            >
              {doc}
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  
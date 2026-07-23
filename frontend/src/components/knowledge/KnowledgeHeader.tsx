export default function KnowledgeHeader() {
    return (
      <div className="flex items-center justify-between">
  
        <div>
  
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Knowledge Hub
          </h1>
  
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Access SOPs, training guides, manuals and best practices.
          </p>
  
        </div>
  
        <div
          className="
            px-4
            py-2
            rounded-xl
            bg-blue-100
            text-blue-700
            dark:bg-blue-500/10
            dark:text-blue-400
            font-medium
          "
        >
          248 Resources
        </div>
  
      </div>
    );
  }
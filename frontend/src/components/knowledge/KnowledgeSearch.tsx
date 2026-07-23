import { Search } from "lucide-react";

export default function KnowledgeSearch() {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        rounded-2xl
        p-4
      "
    >
      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search documents, SOPs, manuals..."
          className="
            w-full
            pl-11
            pr-4
            py-3
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            bg-transparent
            outline-none
          "
        />

      </div>
    </div>
  );
}

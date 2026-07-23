import {
    FileText,
    Download,
  } from "lucide-react";
  
  interface Props {
    title: string;
    category: string;
  }
  
  export default function KnowledgeCard({
    title,
    category,
  }: Props) {
    return (
      <div
        className="
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-800
          rounded-2xl
          p-5
          hover:shadow-lg
          transition
        "
      >
        <FileText
          size={28}
          className="text-blue-600 mb-4"
        />
  
        <p className="text-xs text-blue-600 mb-2">
          {category}
        </p>
  
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
  
        <button
          className="
            mt-5
            flex
            items-center
            gap-2
            text-blue-600
            font-medium
          "
        >
          <Download size={16} />
          Download
        </button>
      </div>
    );
  }
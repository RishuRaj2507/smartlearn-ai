interface Props {
    title: string;
    duration: string;
    score: string;
    status: string;
  }
  
  export default function AssessmentCard({
    title,
    duration,
    score,
    status,
  }: Props) {
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
        <span
          className="
            px-3
            py-1
            rounded-full
            bg-blue-100
            text-blue-700
            text-xs
            font-medium
          "
        >
          {status}
        </span>
  
        <h3 className="mt-4 text-xl font-semibold">
          {title}
        </h3>
  
        <p className="mt-2 text-slate-500">
          Duration: {duration}
        </p>
  
        <p className="mt-1 text-slate-500">
          Latest Score: {score}
        </p>
  
        <button
          className="
            mt-5
            px-4
            py-2
            rounded-xl
            bg-blue-600
            text-white
          "
        >
          View Assessment
        </button>
      </div>
    );
  }
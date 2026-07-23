interface CertificationCardProps {
    title: string;
    provider: string;
    status: string;
  }
  
  export default function CertificationCard({
    title,
    provider,
    status,
  }: CertificationCardProps) {
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
        "
      >
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
          {title}
        </h3>
  
        <p className="text-sm text-slate-500 mt-2">
          {provider}
        </p>
  
        <div className="mt-4">
  
          <span
            className="
              px-3
              py-1
              rounded-full
              bg-green-100
              text-green-700
              text-xs
              font-medium
            "
          >
            {status}
          </span>
  
        </div>
      </div>
    );
  }
  
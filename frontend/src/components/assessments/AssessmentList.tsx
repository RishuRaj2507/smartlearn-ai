import AssessmentCard from "./AssessmentCard";

export default function AssessmentList() {
  const assessments = [
    {
      title: "PLC Fundamentals",
      duration: "45 min",
      score: "88%",
      status: "Completed",
    },
    {
      title: "Industrial Safety",
      duration: "30 min",
      score: "92%",
      status: "Completed",
    },
    {
      title: "Hydraulic Systems",
      duration: "60 min",
      score: "--",
      status: "Pending",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5">

      {assessments.map((item) => (
        <AssessmentCard
          key={item.title}
          {...item}
        />
      ))}

    </div>
  );
}
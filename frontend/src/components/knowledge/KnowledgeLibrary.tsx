import KnowledgeCard from "./KnowledgeCard";

export default function KnowledgeLibrary() {
  const docs = [
    {
      title: "PLC Fundamentals Guide",
      category: "PLC",
    },
    {
      title: "Hydraulic SOP Manual",
      category: "Hydraulics",
    },
    {
      title: "Industrial Safety Handbook",
      category: "Safety",
    },
    {
      title: "Automation Best Practices",
      category: "Automation",
    },
    {
      title: "Lean Manufacturing Guide",
      category: "Lean",
    },
    {
      title: "Predictive Maintenance SOP",
      category: "Maintenance",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">

      {docs.map((doc, index) => (
        <KnowledgeCard
          key={index}
          title={doc.title}
          category={doc.category}
        />
      ))}

    </div>
  );
}

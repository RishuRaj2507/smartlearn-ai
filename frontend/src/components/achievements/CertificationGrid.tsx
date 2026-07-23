import CertificationCard from "./CertificationCard";

export default function CertificationGrid() {
  const certifications = [
    {
      title: "PLC Expert",
      provider: "Siemens",
      status: "Completed",
    },
    {
      title: "Lean Manufacturing",
      provider: "Industrial Academy",
      status: "Completed",
    },
    {
      title: "Safety Excellence",
      provider: "ISO Training",
      status: "Completed",
    },
    {
      title: "Automation Specialist",
      provider: "Rockwell",
      status: "In Progress",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <CertificationCard
          key={index}
          {...cert}
        />
      ))}
    </div>
  );
}
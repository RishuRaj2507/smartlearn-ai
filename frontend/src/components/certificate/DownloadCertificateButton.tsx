"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  employee: string;
  course: string;
  certificateId: string;
  issueDate: string;
}

export default function DownloadCertificateButton({
  employee,
  course,
  certificateId,
  issueDate,
}: Props) {

  const downloadCertificate = async () => {

    const certificate =
      document.getElementById("certificate");

    if (!certificate) return;

    const canvas = await html2canvas(certificate, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const y =
      imgHeight < pageHeight
        ? (pageHeight - imgHeight) / 2
        : 0;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      y,
      imgWidth,
      imgHeight
    );

    pdf.setFontSize(8);
    pdf.setTextColor(120);
    pdf.text(
      `Certificate ID: ${certificateId}`,
      10,
      pageHeight - 8
    );

    pdf.text(
      `Issued: ${new Date(issueDate).toLocaleDateString()}`,
      pageWidth - 60,
      pageHeight - 8
    );

    pdf.save(
      `${employee}-${course}-Certificate.pdf`
    );
  };

  return (
    <button
      onClick={downloadCertificate}
      className="
        mt-8
        w-full
        rounded-xl
        bg-gradient-to-r
        from-blue-700
        to-blue-500
        py-4
        text-white
        font-semibold
        hover:scale-[1.02]
        transition-all
      "
    >
      ⬇ Download Premium Certificate
    </button>
  );
}
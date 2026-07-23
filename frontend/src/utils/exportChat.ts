import jsPDF from "jspdf";

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  timestamp?: string;
}

export function exportAsTXT(messages: ChatMessage[]) {
  let content = "";

  messages.forEach((msg) => {
    content += `[${msg.sender.toUpperCase()}]`;

    if (msg.timestamp) {
      content += ` (${msg.timestamp})`;
    }

    content += `\n${msg.text}\n\n`;
  });

  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "AI-Conversation.txt";

  link.click();

  URL.revokeObjectURL(url);
}

export function exportAsPDF(messages: ChatMessage[]) {
  const pdf = new jsPDF();

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("Industrial AI Learning Coach", 20, 20);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  let y = 35;

  messages.forEach((msg) => {
    const title =
      `${msg.sender.toUpperCase()} ${msg.timestamp ?? ""}`;

    pdf.setFont("helvetica", "bold");
    pdf.text(title, 20, y);

    y += 7;

    pdf.setFont("helvetica", "normal");

    const lines = pdf.splitTextToSize(
      msg.text,
      170
    );

    pdf.text(lines, 20, y);

    y += lines.length * 6 + 10;

    if (y > 270) {
      pdf.addPage();
      y = 20;
    }
  });

  pdf.save("AI-Conversation.pdf");
}
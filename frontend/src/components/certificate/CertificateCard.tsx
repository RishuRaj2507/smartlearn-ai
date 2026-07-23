"use client";

import Image from "next/image";
import { Calendar, Hash } from "lucide-react";

import DownloadCertificateButton from "./DownloadCertificateButton";

interface Props {
  employee: string;
  course: string;
  certificateId: string;
  issueDate: string;
}

export default function CertificateCard({
  employee,
  course,
  certificateId,
  issueDate,
}: Props) {
  return (
    <div
      id="certificate"
      className="
      relative
      bg-gradient-to-br
      from-white
      via-slate-50
      to-blue-50
      rounded-3xl
      shadow-2xl
      overflow-hidden
      border-[10px]
      border-blue-800
      "
    >
      {/* Decorative Border */}

      <div className="absolute inset-5 rounded-2xl border-[3px] border-yellow-400 pointer-events-none" />

      {/* Header */}

      <div
        className="
        bg-gradient-to-r
        from-blue-900
        via-blue-700
        to-blue-600
        text-white
        py-12
        px-10
        text-center
        "
      >
        <Image
          src="/certificate/logo.png"
          alt="Company Logo"
          width={90}
          height={90}
          className="mx-auto"
        />

        <h1 className="mt-6 text-5xl font-black tracking-[5px]">
          CERTIFICATE
        </h1>

        <p className="mt-2 text-2xl font-light text-blue-100">
          OF COMPLETION
        </p>
      </div>

      {/* Body */}

      <div className="px-16 py-14 text-center">

        <p className="uppercase tracking-[6px] text-slate-500 text-sm">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="mt-8 text-6xl font-black text-blue-900">
          {employee}
        </h2>

        <div className="mx-auto mt-6 h-1 w-60 rounded-full bg-yellow-500" />

        <p className="mt-10 text-2xl text-slate-600">
          For successfully completing the professional training programme
        </p>

        <div
          className="
          mt-10
          inline-block
          rounded-2xl
          border
          border-blue-300
          bg-blue-100
          px-12
          py-7
          shadow
          "
        >
          <h3 className="text-4xl font-bold text-blue-900">
            {course}
          </h3>
        </div>

        {/* Certificate Info */}

        <div className="mt-16 grid grid-cols-2 gap-8">

          {/* Certificate ID */}

          <div className="rounded-2xl bg-slate-100 p-7 shadow">

            <Hash
              size={30}
              className="mx-auto text-blue-700"
            />

            <p className="mt-4 text-sm text-slate-500">
              Certificate ID
            </p>

            <p
              className="
              mt-3
              break-all
              text-xl
              font-bold
              text-slate-900
              "
            >
              {certificateId}
            </p>

          </div>

          {/* Issue Date */}

          <div className="rounded-2xl bg-slate-100 p-7 shadow">

            <Calendar
              size={30}
              className="mx-auto text-blue-700"
            />

            <p className="mt-4 text-sm text-slate-500">
              Issue Date
            </p>

            <p
              className="
              mt-3
              text-xl
              font-bold
              text-slate-900
              "
            >
              {new Date(issueDate).toLocaleDateString()}
            </p>

          </div>

        </div>

        {/* Seal & Signature */}

<div
  className="
  mt-20
  grid
  grid-cols-2
  gap-20
  items-end
  "
>

  {/* LEFT : Official Seal */}

  <div className="flex flex-col items-center">

    <Image
      src="/certificate/seal.png"
      alt="Seal"
      width={120}
      height={120}
      className="object-contain"
    />

    <p className="mt-6 text-2xl font-bold text-slate-900">
      Official Seal
    </p>

  </div>

  {/* RIGHT : Signature */}

  <div className="flex flex-col items-center">

    <Image
      src="/certificate/signature.png"
      alt="Signature"
      width={220}
      height={90}
      className="object-contain"
    />

    <p className="mt-6 text-2xl font-bold text-slate-900">
      Industrial L&D AI
    </p>

    <p className="text-slate-500 text-lg">
      Authorized Signatory
    </p>

  </div>

</div>
        {/* Footer */}

        <div
          className="
          mt-16
          rounded-2xl
          bg-gradient-to-r
          from-blue-900
          to-blue-700
          py-6
          text-white
          "
        >

          <h3 className="text-xl font-bold">
            Industrial Learning & Development Assistant
          </h3>

          <p className="mt-2 text-blue-200">
            AI Powered Enterprise Learning Platform
          </p>

        </div>

        {/* Download */}

        <DownloadCertificateButton
          employee={employee}
          course={course}
          certificateId={certificateId}
          issueDate={issueDate}
        />

      </div>

    </div>
  );
}
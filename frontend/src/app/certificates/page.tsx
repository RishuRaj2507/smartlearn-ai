"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getMyCertificates,
} from "@/services/certificateService";

import CertificateCard from "@/components/certificate/CertificateCard";

export default function CertificatesPage() {
  const [certificates, setCertificates] =
    useState<any[]>([]);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates =
    async () => {
      const employeeId =
        localStorage.getItem(
          "employeeId"
        );

      if (!employeeId) return;

      const data =
        await getMyCertificates(
          employeeId
        );

      setCertificates(
        data.certificates
      );
    };

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        My Certificates
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        {certificates.map(
          (certificate) => (
            <CertificateCard
              key={
                certificate._id
              }
              employee={
                JSON.parse(
                  localStorage.getItem(
                    "user"
                  ) || "{}"
                ).name
              }
              course={
                certificate
                  .courseId.title
              }
              certificateId={
                certificate.certificateId
              }
              issueDate={
                certificate.issueDate
              }
            />
          )
        )}

      </div>

    </div>
  );
}
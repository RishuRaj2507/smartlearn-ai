"use client";

import {
  Download,
  Plus,
  BookOpen,
  UserCheck,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-4xl font-bold">
          Learning Administration
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor workforce development and training performance.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex gap-3 flex-wrap">

        {/* Export */}
        <button
          className="
            px-5 py-3
            rounded-xl
            border
            border-slate-300
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
          "
        >
          <Download
            size={16}
            className="inline mr-2"
          />
          Export Report
        </button>

        {/* Add Employee */}
        <button
          onClick={() =>
            router.push("/employees")
          }
          className="
            px-5 py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
          "
        >
          <Plus
            size={16}
            className="inline mr-2"
          />
          Add Employee
        </button>

        {/* Create Course */}
        <button
          onClick={() =>
            router.push("/courses")
          }
          className="
            px-5 py-3
            rounded-xl
            bg-green-600
            text-white
            hover:bg-green-700
            transition
          "
        >
          <BookOpen
            size={16}
            className="inline mr-2"
          />
          Create Course
        </button>

        {/* Assign Course */}
        <button
          onClick={() =>
            router.push("/enrollment")
          }
          className="
            px-5 py-3
            rounded-xl
            bg-purple-600
            text-white
            hover:bg-purple-700
            transition
          "
        >
          <UserCheck
            size={16}
            className="inline mr-2"
          />
          Assign Course
        </button>

      </div>
    </div>
  );
}
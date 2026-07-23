"use client";

import { Search } from "lucide-react";

export default function EmployeeTable() {
  const employees = [
    {
      name: "Alex Rivera",
      role: "Technician",
      progress: 85,
      status: "Active",
      avatar:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "John Smith",
      role: "Engineer",
      progress: 76,
      status: "Learning",
      avatar:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Supervisor",
      progress: 91,
      status: "Certified",
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sophia Brown",
      role: "Maintenance Lead",
      progress: 68,
      status: "Learning",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-800
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Employee Progress
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Monitor workforce learning performance
          </p>
        </div>

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search employee..."
            className="
              pl-10
              pr-4
              py-2
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              text-sm
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr
              className="
                border-b
                border-slate-200
                dark:border-slate-700
                text-slate-500
                text-sm
              "
            >
              <th className="text-left py-4">Employee</th>
              <th className="text-left py-4">Role</th>
              <th className="text-left py-4">Progress</th>
              <th className="text-left py-4">Status</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((emp) => (
              <tr
                key={emp.name}
                className="
                  border-b
                  border-slate-100
                  dark:border-slate-800
                  hover:bg-slate-50
                  dark:hover:bg-slate-800/40
                  transition
                "
              >
                {/* Employee */}
                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <img
                      src={emp.avatar}
                      alt={emp.name}
                      className="
                        w-10
                        h-10
                        rounded-full
                        object-cover
                      "
                    />

                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {emp.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        Employee ID #{Math.floor(
                          Math.random() * 1000
                        )}
                      </p>
                    </div>

                  </div>

                </td>

                {/* Role */}
                <td className="text-slate-600 dark:text-slate-300">
                  {emp.role}
                </td>

                {/* Progress */}
                <td className="w-[250px]">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex-1
                        h-2.5
                        bg-slate-200
                        dark:bg-slate-700
                        rounded-full
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          h-full
                          bg-gradient-to-r
                          from-blue-500
                          to-blue-700
                          rounded-full
                        "
                        style={{
                          width: `${emp.progress}%`,
                        }}
                      />
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-blue-600
                      "
                    >
                      {emp.progress}%
                    </span>

                  </div>

                </td>

                {/* Status */}
                <td>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        emp.status === "Certified"
                          ? "bg-green-100 text-green-700"
                          : emp.status === "Learning"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    `}
                  >
                    {emp.status}
                  </span>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}
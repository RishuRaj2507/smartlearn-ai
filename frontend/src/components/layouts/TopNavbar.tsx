"use client";

import {
  Bell,
  Settings,
  Search,
  CircleHelp,
} from "lucide-react";

import ThemeToggle from "@/components/layouts/ThemeToggle";

export default function TopNavbar() {
  return (
    <header
      className="
        bg-white
        dark:bg-slate-950
        border-b
        border-slate-200
        dark:border-slate-800
        px-6
        lg:px-8
        py-4
        sticky
        top-0
        z-30
      "
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* LEFT SECTION */}
        <div className="flex flex-col">

          <h1
            className="
              text-2xl
              lg:text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Employee Learning Dashboard
          </h1>

          <p
            className="
              hidden
              md:block
              text-sm
              text-slate-500
              dark:text-slate-400
              mt-1
            "
          >
            Personalized AI-powered learning and skill development platform
          </p>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-end gap-4 w-full lg:w-auto">

          {/* Search */}
          <div className="relative hidden md:block">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search courses, skills, modules..."
              className="
                w-72
                xl:w-80
                rounded-xl
                bg-slate-100
                dark:bg-slate-900
                border
                border-transparent
                dark:border-slate-800
                py-2.5
                pl-11
                pr-4
                text-sm
                text-slate-700
                dark:text-slate-200
                outline-none
                transition-all
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
            />

          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">

            <button
              className="
                p-2
                rounded-lg
                text-slate-500
                dark:text-slate-400
                hover:bg-slate-100
                dark:hover:bg-slate-800
                hover:text-blue-600
                transition
              "
            >
              <Bell size={18} />
            </button>

            <button
              className="
                p-2
                rounded-lg
                text-slate-500
                dark:text-slate-400
                hover:bg-slate-100
                dark:hover:bg-slate-800
                hover:text-blue-600
                transition
              "
            >
              <CircleHelp size={18} />
            </button>

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            <button
              className="
                p-2
                rounded-lg
                text-slate-500
                dark:text-slate-400
                hover:bg-slate-100
                dark:hover:bg-slate-800
                hover:text-blue-600
                transition
              "
            >
              <Settings size={18} />
            </button>

          </div>

          {/* Profile */}
          <div
            className="
              flex
              items-center
              gap-3
              pl-4
              border-l
              border-slate-200
              dark:border-slate-800
            "
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="
                w-10
                h-10
                rounded-full
                object-cover
                ring-2
                ring-slate-100
                dark:ring-slate-800
              "
            />

            <div className="hidden lg:block">

              <h3
                className="
                  font-semibold
                  text-sm
                  text-slate-900
                  dark:text-white
                "
              >
                Alex Rivera
              </h3>

              <p
                className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Grade 4 Technician
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/utils/auth";

import {
  LayoutDashboard,
  GraduationCap,
  Brain,
  Trophy,
  Sparkles,
  Headphones,
  LogOut,
  Building2,
  ChevronRight,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  ShieldCheck,
  Award,
  FolderOpen,
  Users,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: GraduationCap,
      label: "Learning Path",
      href: "/learning",
    },
    {
      icon: Brain,
      label: "Skill Analysis",
      href: "/skills",
    },
    {
      icon: FolderOpen,
      label: "My Courses",
      href: "/my-courses",
    },
    {
      icon: Users,
      label: "Enrollments",
      href: "/enrollment",
    },
    {
      icon: Award,
      label: "My Certificates",
      href: "/certificates",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: BookOpen,
      label: "Knowledge Hub",
      href: "/knowledge",
    },
    {
      icon: ClipboardCheck,
      label: "Assessments",
      href: "/assessments",
    },
    {
      icon: ShieldCheck,
      label: "Admin",
      href: "/admin",
    },
    {
      icon: Trophy,
      label: "Achievements",
      href: "/achievements",
    },
    {
      icon: Sparkles,
      label: "AI Coach",
      href: "/ai-coach",
    },
  ];

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-[#071D4A]
        text-white
        flex
        flex-col
        justify-between
        border-r
        border-white/5
      "
    >
      {/* TOP */}
      <div>
        {/* Logo */}
        <div className="px-7 pt-7 pb-8">
          <div className="flex items-center gap-3">
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-gradient-to-br
                from-blue-600
                to-blue-500
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              <Building2 size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Industrial L&D
              </h1>

              <p className="text-xs text-slate-400">
                Enterprise AI Platform
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </div>

                {isActive && (
                  <ChevronRight size={16} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Learning Progress */}
        <div className="px-4 mt-8">
          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
            "
          >
            <p className="text-xs text-slate-400 mb-2">
              Learning Progress
            </p>

            <h3 className="text-3xl font-bold mb-3">
              78%
            </h3>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="
                  h-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-400
                  rounded-full
                "
                style={{ width: "78%" }}
              />
            </div>

            <p className="text-xs text-slate-400 mt-3">
              18 Courses Completed
            </p>

            <p className="text-xs text-green-400 mt-2">
              +12% this month
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-6">
        <Link href="/ai-coach">
          <button
            className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-blue-500
              py-3.5
              font-medium
              text-sm
              shadow-lg
              hover:scale-[1.02]
              transition-all
            "
          >
            ✨ Talk to AI Coach
          </button>
        </Link>

        <div className="border-t border-white/10 my-5" />

        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            text-slate-400
            hover:text-white
            hover:bg-white/10
            transition
          "
        >
          <Headphones size={18} />

          <span className="text-sm">
            Support Center
          </span>
        </button>

        <button
          onClick={logout}
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            text-slate-400
            hover:text-red-400
            hover:bg-red-500/10
            transition
          "
        >
          <LogOut size={18} />

          <span className="text-sm">
            Logout
          </span>
        </button>

        <div
          className="
            mt-5
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="
                w-10
                h-10
                rounded-full
                object-cover
              "
            />

            <div>
              <h4 className="text-sm font-medium">
                Alex Rivera
              </h4>

              <p className="text-xs text-slate-400">
                Grade 4 Technician
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
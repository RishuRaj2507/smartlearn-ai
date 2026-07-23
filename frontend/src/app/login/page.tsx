import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">

      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-between px-20 py-12">

{/* Logo */}
<div>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
      AI
    </div>

    <h2 className="text-3xl font-bold">
      L&D AI Assistant
    </h2>
  </div>
</div>

{/* Main Content */}
<div className="max-w-lg">
  <h1 className="text-6xl font-bold text-slate-900 mb-4">
    Welcome Back
  </h1>

  <p className="text-xl text-gray-500 mb-10">
    Sign in to access your personalized learning dashboard.
  </p>

  <LoginForm />
</div>

{/* Footer */}
<div className="flex justify-between text-sm text-gray-500">
  <span>
    © 2026 Industrial L&D AI
  </span>

  <div className="flex gap-6">
    <span>Privacy</span>
    <span>Terms</span>
    <span>Security</span>
  </div>
</div>

</div>
      {/* Right Section */}
      <div className="relative w-1/2 overflow-hidden">

        {/* Background Image */}
        <Image
        src="/images/industrial-ai.png"
        alt="Industrial AI"
        fill
        priority
        className="object-cover"
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0F2A63]/75" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-16 text-white">

          <span className="inline-block w-fit rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Industrial Intelligence 4.0
          </span>

          <h2 className="mt-6 text-6xl font-bold leading-tight">
            Empowering Workforce
            <br />
            Learning with AI
          </h2>

          <p className="mt-6 max-w-xl text-xl text-slate-200 leading-relaxed">
            Personalized learning, skill intelligence, and
            knowledge assistance integrated into one seamless
            enterprise platform.
          </p>

          {/* Feature Cards */}
          <div className="mt-14 grid grid-cols-2 gap-6 max-w-2xl">

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">
                Skill Gap Analysis
              </h3>

              <p className="text-slate-300">
                Real-time mapping of team capabilities.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">
                AI Tutoring
              </h3>

              <p className="text-slate-300">
                24/7 technical assistance for technicians.
              </p>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}
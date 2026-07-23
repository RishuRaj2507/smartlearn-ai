import { Sparkles, Send, BrainCircuit } from "lucide-react";

export default function AICoachCard() {
  return (
    <div
      className="
        bg-gradient-to-br
        from-[#071D4A]
        via-[#0B2B68]
        to-[#123C8F]
        rounded-2xl
        p-6
        text-white
        shadow-lg
        h-full
        flex
        flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">

        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
          <BrainCircuit size={22} />
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            AI Learning Coach
          </h3>

          <p className="text-xs text-slate-300">
            Powered by Generative AI
          </p>
        </div>

      </div>

      {/* Description */}
      <p className="text-sm text-slate-200 leading-relaxed mb-6">
        Get instant guidance on PLC programming,
        industrial maintenance, safety procedures,
        hydraulics, and personalized learning paths.
      </p>

      {/* Suggested Prompts */}
      <div className="space-y-2 mb-6">

        <button className="w-full text-left bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 text-sm transition">
          Explain preventive maintenance strategies
        </button>

        <button className="w-full text-left bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 text-sm transition">
          Recommend courses for PLC troubleshooting
        </button>

      </div>

      {/* Input Area */}
      <div className="mt-auto">

        <div className="relative">

          <input
            type="text"
            placeholder="Ask your AI Coach..."
            className="
              w-full
              bg-white/10
              border
              border-white/10
              rounded-xl
              py-3
              pl-4
              pr-12
              text-sm
              placeholder:text-slate-300
              outline-none
            "
          />

          <button
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              w-8
              h-8
              rounded-lg
              bg-blue-500
              hover:bg-blue-600
              flex
              items-center
              justify-center
              transition
            "
          >
            <Send size={15} />
          </button>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">

          <Sparkles size={14} />

          <span>
            AI-generated recommendations updated daily
          </span>

        </div>

      </div>
    </div>
  );
}
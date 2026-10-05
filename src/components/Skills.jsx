import {
  BarChart3,
  Cloud,
  Code2,
  MonitorCog,
  Sparkles,
} from "lucide-react";

import skills from "../data/skills";

function Skills() {
  const iconMap = {
    backend: Code2,
    ai: Sparkles,
    data: BarChart3,
    cloud: Cloud,
    industrial: MonitorCog,
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            02 / Skills
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
            Tools I use to build things.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
            A practical stack built around backend engineering, AI
            applications, data analysis, cloud technologies, and industrial
            systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {skills.map((category, index) => {
            const isFeatured = category.featured;
            const Icon = iconMap[category.id] || Code2;

            return (
              <article
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:bg-[#1D1D1D] ${
                  isFeatured
                    ? "min-h-[260px] lg:col-span-2"
                    : "min-h-[230px]"
                }`}
              >

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#7C3AED]/10 blur-3xl transition-all duration-500 group-hover:bg-[#7C3AED]/20" />

                {/* Top Row */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider text-[#52525B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {isFeatured && (
                    <span className="rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#C4B5FD]">
                      Core
                    </span>
                  )}
                </div>

                {/* Icon / Accent */}
                <div className="relative mt-7 flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/15">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#C4B5FD] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-[#F5F5F5]">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="relative mt-2 max-w-xl text-sm leading-6 text-[#71717A]">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-[#111111] px-3 py-1.5 font-mono text-[10px] text-[#A1A1AA] transition-all duration-200 group-hover:border-white/15 group-hover:text-[#C4B5FD]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#7C3AED] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Stack Summary */}
        <div className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#52525B]">
              Primary stack
            </span>

            <p className="mt-1 text-sm text-[#A1A1AA]">
              Java · Spring Boot · PostgreSQL · Python · AWS
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[9px] text-[#52525B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            continuously learning
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            04 / Experience
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
            Where I&apos;ve worked.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
            A timeline of my professional experience, internships, and
            hands-on engineering work.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 sm:left-[9px]" />

          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={item.id}
                className="relative pl-8 sm:pl-12"
              >

                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    item.current
                      ? "border-[#7C3AED] bg-[#111111]"
                      : "border-[#52525B] bg-[#111111]"
                  }`}
                >
                  {item.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/50" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`group rounded-2xl border bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D1D1D] sm:p-7 ${
                    item.current
                      ? "border-[#7C3AED]/30 hover:border-[#7C3AED]/50"
                      : "border-white/10 hover:border-white/15"
                  }`}
                >

                  {/* Current Role Badge */}
                  {item.current && (
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7C3AED]" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#C4B5FD]">
                        Current Role
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#F5F5F5] sm:text-2xl">
                        {item.role}
                      </h3>

                      <p className="mt-1.5 text-sm font-medium text-[#C4B5FD]">
                        {item.company}
                      </p>
                    </div>

                    <div className="lg:text-right">
                      <p className="font-mono text-xs text-[#A1A1AA]">
                        {item.duration}
                      </p>

                      <p className="mt-1 text-xs text-[#52525B]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <ul className="space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-[#A1A1AA]"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Meta */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                      {item.current ? "Professional Experience" : "Internship"}
                    </span>

                    <span className="font-mono text-[9px] text-[#303030]">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
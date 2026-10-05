import profile from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] pt-32 sm:pt-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7C3AED]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A1A1AA]">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#F5F5F5] sm:text-5xl md:text-6xl lg:text-[72px]">
            Java Developer
            <span className="text-[#7C3AED]"> · </span>
            Backend Developer
            <br className="hidden lg:block" />
            <span className="text-[#7C3AED]"> · </span>
            Prompt Engineer
            <span className="text-[#7C3AED]"> · </span>
            Data Analyst
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg">
            {profile.heroTagline}
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="w-full rounded-full bg-[#7C3AED] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] hover:shadow-xl hover:shadow-[#7C3AED]/20 sm:w-auto"
            >
              View My Work
              <span className="ml-2">↓</span>
            </a>

            <a
              href={`mailto:${profile.contact.email}`}
              className="w-full rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-[#F5F5F5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 sm:w-auto"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Developer Workspace */}
          <div className="mx-auto mt-16 max-w-4xl text-left">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-2xl shadow-black/30">

              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#151515] px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
                </div>

                <span className="font-mono text-[10px] text-[#52525B]">
                  hritik@developer ~
                </span>

                <span className="font-mono text-[9px] text-[#52525B]">
                  zsh
                </span>
              </div>

              {/* Terminal Content */}
              <div className="min-h-[280px] p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">

                <div className="text-[#52525B]">
                  <span className="text-[#7C3AED]">➜</span> whoami
                </div>

                <div className="text-[#C4B5FD]">
                  hritik-p / software-engineer
                </div>

                <div className="mt-3 text-[#52525B]">
                  <span className="text-[#7C3AED]">➜</span> stack --primary
                </div>

                <div className="text-[#F5F5F5]">
                  Java · Spring Boot · REST APIs · PostgreSQL
                </div>

                <div className="mt-3 text-[#52525B]">
                  <span className="text-[#7C3AED]">➜</span> exploring --now
                </div>

                <div className="text-[#F5F5F5]">
                  AI · Prompt Engineering · Data Analytics
                </div>

                <div className="mt-3 text-[#52525B]">
                  <span className="text-[#7C3AED]">➜</span> status
                </div>

                <div className="flex items-center gap-2 text-[#C4B5FD]">
                  <span>✓</span>
                  <span>Building reliable things.</span>
                </div>

                <div className="mt-3 flex items-center text-[#7C3AED]">
                  <span>➜</span>
                  <span className="ml-2 h-4 w-2 animate-pulse bg-[#7C3AED]" />
                </div>
              </div>

              {/* Workspace Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#151515] px-5 py-3">
                <span className="font-mono text-[9px] text-[#52525B]">
                  ~/portfolio
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] text-[#52525B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                  ready
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-[#52525B]">
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
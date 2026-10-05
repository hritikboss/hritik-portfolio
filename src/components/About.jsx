import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            01 / About
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
              {profile.about.heading}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
              {profile.about.description}
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-3">
              {profile.about.highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-[#181818] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/40 hover:bg-[#202020]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 font-mono text-xs text-[#C4B5FD]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#F5F5F5]">
                      {highlight.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#71717A]">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Illustration */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Purple Glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[#7C3AED]/10 blur-[90px]" />

            {/* Illustration */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] shadow-2xl shadow-black/40">
              <img
                src="/about-developer.png"
                alt="Hritik Pandey - Developer Illustration"
                className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Subtle Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent" />

              {/* Inner Violet Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#7C3AED]/10 transition-all duration-500 group-hover:ring-[#7C3AED]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
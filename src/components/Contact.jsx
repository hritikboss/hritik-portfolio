import profile from "../data/profile";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 6a2 2 0 0 1 2-2.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.16 1.19a10.9 10.9 0 0 1 5.75 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.11 0 4.46-2.72 5.44-5.3 5.73.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.45v1.57h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.23h-3.6v-5.52c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.61H9.2V9Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-32"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Section Label */}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
          06 / Contact
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F5F5F5] sm:text-5xl lg:text-6xl">
          Have an idea?
          <br />
          <span className="text-[#C4B5FD]">
            Let&apos;s build it.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#A1A1AA]">
          Whether it&apos;s a backend system, an AI-powered application, or a
          data-driven solution, I&apos;m open to interesting opportunities and
          meaningful projects.
        </p>

        {/* Primary Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.contact.email}`}
            className="group inline-flex w-full items-center justify-center rounded-full bg-[#7C3AED] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] hover:shadow-xl hover:shadow-[#7C3AED]/20 sm:w-auto"
          >
            <MailIcon />

            <span className="ml-2">
              Send Me an Email
            </span>

            <span className="ml-2 transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <a
            href={`tel:${profile.contact.phone}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-[#181818] px-7 py-3.5 text-sm font-medium text-[#F5F5F5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7C3AED]/40 hover:bg-[#202020] sm:w-auto"
          >
            <PhoneIcon />

            <span className="ml-2">
              Call Me
            </span>
          </a>
        </div>

        {/* Contact Details */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
          {/* Email */}
          <a
            href={`mailto:${profile.contact.email}`}
            className="group rounded-2xl border border-white/10 bg-[#181818] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/30 hover:bg-[#1D1D1D]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]">
                <MailIcon />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                Email
              </span>
            </div>

            <p className="mt-3 truncate text-sm text-[#A1A1AA] group-hover:text-[#C4B5FD]">
              {profile.contact.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${profile.contact.phone}`}
            className="group rounded-2xl border border-white/10 bg-[#181818] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/30 hover:bg-[#1D1D1D]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]">
                <PhoneIcon />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                Phone
              </span>
            </div>

            <p className="mt-3 text-sm text-[#A1A1AA] group-hover:text-[#C4B5FD]">
              {profile.contact.phone}
            </p>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-white/10 bg-[#181818] p-5 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]">
                <LocationIcon />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                Location
              </span>
            </div>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              {profile.location}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#71717A]">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#C4B5FD]"
          >
            <GithubIcon />
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <span className="text-[#303030]">•</span>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#C4B5FD]"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
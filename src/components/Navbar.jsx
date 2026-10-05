import { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src="/profile.jpg"
            alt="Hritik Pandey"
            className="h-9 w-9 rounded-full border border-[#7C3AED]/50 object-cover object-center shadow-lg shadow-[#7C3AED]/10 transition-all duration-300 group-hover:border-[#7C3AED] group-hover:shadow-[#7C3AED]/20"
          />

          <span className="text-lg font-semibold tracking-tight text-[#F5F5F5]">
            Hritik
            <span className="text-[#7C3AED]">.</span>
          </span>

          <span className="hidden font-mono text-[9px] uppercase tracking-wider text-[#52525B] transition-colors group-hover:text-[#71717A] sm:block">
            dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#7C3AED]/10 text-[#C4B5FD]"
                    : "text-[#71717A] hover:bg-white/[0.04] hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className="ml-3 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-2 text-xs font-medium text-[#C4B5FD] transition-all duration-200 hover:border-[#7C3AED]/70 hover:bg-[#7C3AED]/20"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#A1A1AA] transition-colors hover:border-[#7C3AED]/40 hover:text-[#F5F5F5] md:hidden"
        >
          <span className="flex flex-col gap-1">
            <span
              className={`block h-px w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#111111]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#7C3AED]/10 text-[#C4B5FD]"
                      : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-[#F5F5F5]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className="mt-2 rounded-xl bg-[#7C3AED] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#6D28D9]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      setScrolled(window.scrollY > 20);

      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 140;

        let currentSection = "";

        for (const item of navItems) {
          const section = document.getElementById(item.id);

          if (!section) {
            continue;
          }

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

          if (scrollPosition >= sectionTop) {
            currentSection = item.id;
          } else {
            break;
          }
        }

        setActiveSection(currentSection);
        ticking = false;
      });
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    window.addEventListener("hashchange", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
      window.removeEventListener("hashchange", updateNavbar);
    };
  }, []);

  useEffect(() => {
    if (!isProfileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileOpen]);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <div className="group flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              aria-label="Open profile photo"
              className="cursor-zoom-in rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/70"
            >
              <img
                src="/profile.jpg"
                alt="Hritik Pandey"
                className="h-9 w-9 rounded-full border border-[#7C3AED]/50 object-cover object-center shadow-lg shadow-[#7C3AED]/10 transition-all duration-300 group-hover:border-[#7C3AED] group-hover:shadow-[#7C3AED]/20"
              />
            </button>

            <a
              href="#home"
              onClick={() => handleLinkClick("")}
              className="flex items-center"
            >
              <span className="text-lg font-semibold tracking-tight text-[#F5F5F5]">
                Hritik
                <span className="text-[#7C3AED]">.</span>
              </span>

              <span className="hidden font-mono text-[9px] uppercase tracking-wider text-[#52525B] transition-colors group-hover:text-[#71717A] sm:ml-2 sm:block">
                dev
              </span>
            </a>
          </div>

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

      {/* Profile Image Lightbox */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md sm:p-8"
            onClick={() => setIsProfileOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded profile photo"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 15,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src="/profile.jpg"
                alt="Hritik Pandey"
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black/60 sm:max-w-[600px]"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsProfileOpen(false)}
                aria-label="Close profile photo"
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xl text-white/80 backdrop-blur-md transition-all duration-200 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-white"
              >
                <span aria-hidden="true">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
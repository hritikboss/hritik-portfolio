import { motion } from "framer-motion";
import profile from "../data/profile";

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease,
    },
  },
};

const codeLine = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#111111] pt-24 sm:pt-28"
    >
      {/* Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute left-[58%] top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[150px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 top-1/4 h-[360px] w-[360px] rounded-full bg-[#7C3AED]/5 blur-[130px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12"
        >
          {/* LEFT SIDE */}
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/25 bg-[#7C3AED]/[0.06] px-4 py-2"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
                animate={{
                  opacity: [1, 0.35, 1],
                  scale: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#C4B5FD]">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={slideLeft}
              className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#F5F5F5] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]"
            >
              <span className="block">
                Java Developer
                <span className="text-[#7C3AED]">.</span>
              </span>

              <span className="mt-1 block text-[#C4B5FD]">
                Backend Engineer
                <span className="text-[#7C3AED]">.</span>
              </span>

              <span className="mt-5 block text-[0.62em] leading-[1.15] tracking-[-0.025em] text-[#F5F5F5]">
                Building reliable
                <span className="text-[#7C3AED]"> · </span>
                scalable systems
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8 lg:mx-0"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#52525B] sm:text-xs lg:justify-start"
            >
              <span>Java</span>
              <span className="text-[#7C3AED]">·</span>
              <span>Spring Boot</span>
              <span className="text-[#7C3AED]">·</span>
              <span>REST APIs</span>
              <span className="text-[#7C3AED]">·</span>
              <span>PostgreSQL</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 14px 35px rgba(124, 58, 237, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-full bg-[#7C3AED] px-7 py-3.5 text-center text-sm font-medium text-white shadow-lg shadow-[#7C3AED]/10"
              >
                View My Work
                <span className="ml-2">↓</span>
              </motion.a>

              <motion.a
                href={`mailto:${profile.contact.email}`}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  borderColor: "rgba(124, 58, 237, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-center text-sm font-medium text-[#F5F5F5] hover:bg-[#7C3AED]/10"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-[#52525B]"
            >
              {profile.location}
            </motion.div>
          </div>

          {/* RIGHT SIDE — CLEAN PROGRAMMING + AI VISUAL */}
          <motion.div
            variants={slideRight}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/15 blur-[110px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Code Panel */}
              <div className="absolute inset-x-4 top-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F57]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#28C840]/70" />
                  </div>

                  <span className="font-mono text-[9px] text-[#52525B]">
                    backend.java
                  </span>
                </div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  className="p-6 font-mono text-[9px] leading-7 sm:p-8 sm:text-[10px]"
                >
                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">01</span>{" "}
                    <span className="text-[#C4B5FD]">
                      @RestController
                    </span>
                  </motion.div>

                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">02</span>{" "}
                    <span className="text-[#F5F5F5]">
                      public class Backend
                    </span>
                  </motion.div>

                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">03</span>{" "}
                    <span className="text-[#7C3AED]">
                      {"  "}buildReliableSystems();
                    </span>
                  </motion.div>

                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">04</span>{" "}
                    <span className="text-[#7C3AED]">
                      {"  "}scaleApplications();
                    </span>
                  </motion.div>

                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">05</span>{" "}
                    <span className="text-[#7C3AED]">
                      {"  "}integrateAI();
                    </span>
                  </motion.div>

                  <motion.div variants={codeLine}>
                    <span className="text-[#52525B]">06</span>{" "}
                    <span className="text-[#71717A]">{"}"}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Main AI Panel */}
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.45,
                  ease,
                }}
                className="relative z-10 mx-auto mt-12 w-[84%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#181818] shadow-2xl shadow-black/60"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#151515] px-5 py-3.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7C3AED]">
                    AI / SYSTEM
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-[#52525B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    online
                  </span>
                </div>

                {/* AI Core */}
                <div className="relative aspect-square overflow-hidden bg-[#121212]">
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(124,58,237,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.7) 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />

                  {/* Connection Lines */}
                  <div className="absolute left-[22%] top-[28%] h-px w-[56%] rotate-[18deg] bg-[#7C3AED]/30" />
                  <div className="absolute left-[22%] top-[70%] h-px w-[56%] -rotate-[18deg] bg-[#7C3AED]/30" />
                  <div className="absolute left-[31%] top-[50%] h-[30%] w-px rotate-[42deg] bg-[#7C3AED]/25" />
                  <div className="absolute right-[31%] top-[20%] h-[60%] w-px -rotate-[42deg] bg-[#7C3AED]/25" />

                  {/* Center AI */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 shadow-[0_0_70px_rgba(124,58,237,0.25)]"
                    animate={{
                      scale: [1, 1.06, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute inset-5 flex items-center justify-center rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10">
                      <span className="font-mono text-sm font-semibold tracking-widest text-[#C4B5FD]">
                        AI
                      </span>
                    </div>
                  </motion.div>

                  {/* Nodes */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-[14%] top-[25%] flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/25 bg-[#181818]/95"
                  >
                    <span className="font-mono text-[8px] text-[#C4B5FD]">
                      JAVA
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[14%] top-[25%] flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/25 bg-[#181818]/95"
                  >
                    <span className="font-mono text-[8px] text-[#C4B5FD]">
                      AI
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[22%] left-[14%] flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/25 bg-[#181818]/95"
                  >
                    <span className="font-mono text-[8px] text-[#C4B5FD]">
                      API
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 4.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[22%] right-[14%] flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/25 bg-[#181818]/95"
                  >
                    <span className="font-mono text-[8px] text-[#C4B5FD]">
                      DB
                    </span>
                  </motion.div>

                  {/* Rings */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7C3AED]/10"
                    animate={{
                      scale: [0.9, 1.12, 0.9],
                      opacity: [0.2, 0.45, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7C3AED]/5"
                    animate={{
                      scale: [0.92, 1.06, 0.92],
                      opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/10 bg-[#151515] px-5 py-4">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#52525B]">
                      Core Stack
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#F5F5F5]">
                      Java · Spring Boot · AI
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-[#71717A]">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
                      animate={{
                        opacity: [1, 0.35, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    processing
                  </div>
                </div>
              </motion.div>

              {/* Clean Info Cards */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-0 z-20 rounded-xl border border-white/10 bg-[#151515]/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl"
              >
                <p className="font-mono text-[8px] uppercase tracking-wider text-[#52525B]">
                  Building
                </p>

                <p className="mt-1 text-xs font-medium text-[#C4B5FD]">
                  Intelligent systems
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-[43%] z-20 rounded-xl border border-white/10 bg-[#151515]/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl"
              >
                <p className="font-mono text-[8px] uppercase tracking-wider text-[#52525B]">
                  Architecture
                </p>

                <p className="mt-1 text-xs font-medium text-[#F5F5F5]">
                  API · Cloud · Data
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent" />
    </section>
  );
}

export default Hero;
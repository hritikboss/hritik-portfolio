import { motion } from "framer-motion";
import education from "../data/education";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.2v4.3c0 1.2 2.2 3 5 3s5-1.8 5-3v-4.3" />
      <path d="M21 9v6" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 10h5" />
      <path d="m9 17 1.5 4 1.5-2 1.5 2 1.5-4" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4v1a4 4 0 0 0 4 4" />
      <path d="M16 6h4v1a4 4 0 0 1-4 4" />
      <path d="M12 12v4" />
      <path d="M8 20h8" />
      <path d="M9 16h6" />
    </svg>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            05 / Education
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
            Education & credentials.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
            Academic background, certifications, and achievements that shaped
            my technical journey.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Academic Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]"
                >
                  <GraduationIcon />
                </motion.div>

                <h3 className="text-xl font-semibold text-[#F5F5F5]">
                  Academic Background
                </h3>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                Education
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              className="mt-8 space-y-5"
            >
              {education.academic.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`relative rounded-xl border bg-[#111111] p-5 transition-colors duration-300 hover:border-[#7C3AED]/30 ${
                    index === 0
                      ? "border-[#7C3AED]/25"
                      : "border-white/10"
                  }`}
                >
                  {index === 0 && (
                    <span className="absolute right-4 top-4 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-[#C4B5FD]">
                      Degree
                    </span>
                  )}

                  <span className="font-mono text-[9px] text-[#52525B]">
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 pr-16 text-base font-semibold text-[#F5F5F5]">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm text-[#C4B5FD]">
                    {item.institution}
                  </p>

                  {item.university && (
                    <p className="mt-1 text-xs text-[#71717A]">
                      {item.university}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] text-[#52525B]">
                    <span>{item.duration}</span>
                    <span>{item.score}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -2,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]"
                >
                  <CertificateIcon />
                </motion.div>

                <h3 className="text-xl font-semibold text-[#F5F5F5]">
                  Certifications
                </h3>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                Credentials
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              className="mt-8 space-y-3"
            >
              {education.certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#111111] p-4 transition-colors duration-300 hover:border-[#7C3AED]/30 hover:bg-[#151515]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#181818] font-mono text-[9px] text-[#7C3AED]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-[#F5F5F5]">
                      {cert.title}
                    </h4>

                    <p className="mt-1 text-xs text-[#71717A]">
                      {cert.issuer}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-[9px] text-[#52525B]">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mt-5 rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#C4B5FD]"
              >
                <TrophyIcon />
              </motion.div>

              <h3 className="text-xl font-semibold text-[#F5F5F5]">
                Achievements
              </h3>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
              Highlights
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {education.achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                }}
                className="group rounded-xl border border-white/10 bg-[#111111] p-5 transition-colors duration-300 hover:border-[#7C3AED]/30 hover:bg-[#151515]"
              >
                <div className="flex items-start gap-3">
                  <motion.span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/30"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#C4B5FD]">
                      {achievement.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#71717A]">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
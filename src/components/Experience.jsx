// import { motion } from "framer-motion";
// import experience from "../data/experience";

// const ease = [0.22, 1, 0.36, 1];

// const headerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     x: 45,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease,
//     },
//   },
// };

// const listVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     x: -10,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.45,
//       ease,
//     },
//   },
// };

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Section Header */}
//         <motion.div
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.35,
//           }}
//           className="mb-12 max-w-2xl"
//         >
//           <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
//             04 / Experience
//           </span>

//           <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
//             Where I&apos;ve worked.
//           </h2>

//           <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
//             A timeline of my professional experience, internships, and
//             hands-on engineering work.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Timeline Line */}
//           <motion.div
//             initial={{
//               scaleY: 0,
//               transformOrigin: "top",
//             }}
//             whileInView={{
//               scaleY: 1,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 1.6,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 sm:left-[9px]"
//           />

//           <div className="space-y-6">
//             {experience.map((item, index) => (
//               <motion.article
//                 key={item.id}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}
//                 transition={{
//                   delay: index * 0.12,
//                 }}
//                 className="relative pl-8 sm:pl-12"
//               >

//                 {/* Timeline Dot */}
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     scale: 0.5,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.4,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.12 + 0.15,
//                     ease,
//                   }}
//                   className={`absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
//                     item.current
//                       ? "border-[#7C3AED] bg-[#111111]"
//                       : "border-[#52525B] bg-[#111111]"
//                   }`}
//                 >
//                   {item.current && (
//                     <motion.span
//                       className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/50"
//                       animate={{
//                         scale: [1, 0.7, 1],
//                         opacity: [1, 0.5, 1],
//                       }}
//                       transition={{
//                         duration: 1.8,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                   )}
//                 </motion.div>

//                 {/* Experience Card */}
//                 <motion.div
//                   variants={cardVariants}
//                   whileHover={{
//                     y: -4,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease,
//                   }}
//                   className={`group rounded-2xl border bg-[#181818] p-6 transition-colors duration-300 hover:bg-[#1D1D1D] sm:p-7 ${
//                     item.current
//                       ? "border-[#7C3AED]/30 hover:border-[#7C3AED]/50"
//                       : "border-white/10 hover:border-white/15"
//                   }`}
//                 >

//                   {/* Current Role Badge */}
//                   {item.current && (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         scale: 0.95,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         scale: 1,
//                       }}
//                       viewport={{
//                         once: true,
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.12 + 0.25,
//                         ease,
//                       }}
//                       className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1.5"
//                     >
//                       <motion.span
//                         className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
//                         animate={{
//                           opacity: [1, 0.35, 1],
//                         }}
//                         transition={{
//                           duration: 1.6,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                         }}
//                       />

//                       <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#C4B5FD]">
//                         Current Role
//                       </span>
//                     </motion.div>
//                   )}

//                   {/* Header */}
//                   <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">

//                     <div>
//                       <h3 className="text-xl font-semibold tracking-tight text-[#F5F5F5] sm:text-2xl">
//                         {item.role}
//                       </h3>

//                       <p className="mt-1.5 text-sm font-medium text-[#C4B5FD]">
//                         {item.company}
//                       </p>
//                     </div>

//                     <div className="lg:text-right">
//                       <p className="font-mono text-xs text-[#A1A1AA]">
//                         {item.duration}
//                       </p>

//                       <p className="mt-1 text-xs text-[#52525B]">
//                         {item.location}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Highlights */}
//                   <motion.div
//                     variants={listVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{
//                       once: true,
//                       amount: 0.25,
//                     }}
//                     className="mt-6 border-t border-white/10 pt-6"
//                   >
//                     <ul className="space-y-3">
//                       {item.highlights.map((highlight) => (
//                         <motion.li
//                           key={highlight}
//                           variants={itemVariants}
//                           className="flex gap-3 text-sm leading-6 text-[#A1A1AA]"
//                         >
//                           <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />

//                           <span>{highlight}</span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </motion.div>

//                   {/* Bottom Meta */}
//                   <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
//                     <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
//                       {item.current
//                         ? "Professional Experience"
//                         : "Internship"}
//                     </span>

//                     <span className="font-mono text-[9px] text-[#303030]">
//                       {String(item.id).padStart(2, "0")}
//                     </span>
//                   </div>
//                 </motion.div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;
import { motion } from "framer-motion";
import {
  BarChart3,
  Cloud,
  Code2,
  Coffee,
  Globe2,
} from "lucide-react";
import experience from "../data/experience";

const ease = [0.22, 1, 0.36, 1];

const headerVariants = {
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

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
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

function getExperienceIcon(item) {
  const role = `${item.role} ${item.company}`.toLowerCase();

  if (role.includes("data") || role.includes("analytics")) {
    return BarChart3;
  }

  if (role.includes("aws") || role.includes("cloud")) {
    return Cloud;
  }

  if (role.includes("full stack") || role.includes("full-stack")) {
    return Globe2;
  }

  if (role.includes("java")) {
    return Coffee;
  }

  return Code2;
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.35,
          }}
          className="mb-12 max-w-2xl"
        >
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
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{
              scaleY: 0,
              transformOrigin: "top",
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 1.6,
              ease,
            }}
            className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 sm:left-[19px]"
          />

          <div className="space-y-6">
            {experience.map((item, index) => {
              const Icon = getExperienceIcon(item);

              return (
                <motion.article
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      rotate: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.12 + 0.15,
                      ease,
                    }}
                    className={`absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-xl border bg-[#111111] shadow-lg sm:h-10 sm:w-10 sm:rounded-xl ${
                      item.current
                        ? "border-[#7C3AED]/60 shadow-[#7C3AED]/10"
                        : "border-white/10"
                    }`}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className={
                        item.current
                          ? "text-[#C4B5FD]"
                          : "text-[#71717A]"
                      }
                    />

                    {item.current && (
                      <motion.span
                        className="absolute inset-0 rounded-xl border border-[#7C3AED]/30"
                        animate={{
                          scale: [1, 1.18, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className={`group rounded-2xl border bg-[#181818] p-6 transition-colors duration-300 hover:bg-[#1D1D1D] sm:p-7 ${
                      item.current
                        ? "border-[#7C3AED]/30 hover:border-[#7C3AED]/50"
                        : "border-white/10 hover:border-white/15"
                    }`}
                  >
                    {/* Current Role Badge */}
                    {item.current && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: false,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.25,
                          ease,
                        }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1.5"
                      >
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
                          animate={{
                            opacity: [1, 0.35, 1],
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#C4B5FD]">
                          Current Role
                        </span>
                      </motion.div>
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
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: false,
                        amount: 0.25,
                      }}
                      className="mt-6 border-t border-white/10 pt-6"
                    >
                      <ul className="space-y-3">
                        {item.highlights.map((highlight) => (
                          <motion.li
                            key={highlight}
                            variants={itemVariants}
                            className="flex gap-3 text-sm leading-6 text-[#A1A1AA]"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />

                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Bottom Meta */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                        {item.current
                          ? "Professional Experience"
                          : "Internship"}
                      </span>

                      <span className="font-mono text-[9px] text-[#303030]">
                        {String(item.id).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
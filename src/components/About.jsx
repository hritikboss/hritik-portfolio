// import { motion } from "framer-motion";
// import profile from "../data/profile";

// const ease = [0.22, 1, 0.36, 1];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 35,
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

// const slideLeft = {
//   hidden: {
//     opacity: 0,
//     x: -45,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.9,
//       ease,
//     },
//   },
// };

// const slideRight = {
//   hidden: {
//     opacity: 0,
//     x: 45,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 1,
//       ease,
//     },
//   },
// };

// function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Label */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.4 }}
//           transition={{ duration: 0.7, ease }}
//           className="mb-12"
//         >
//           <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
//             01 / About
//           </span>
//         </motion.div>

//         <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
//           {/* Left Content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: false,
//               amount: 0.2,
//             }}
//           >
//             <motion.h2
//               variants={slideLeft}
//               className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl"
//             >
//               {profile.about.heading}
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               className="mt-7 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg"
//             >
//               {profile.about.description}
//             </motion.p>

//             {/* Highlights */}
//             <motion.div
//               variants={containerVariants}
//               className="mt-10 space-y-3"
//             >
//               {profile.about.highlights.map((highlight, index) => (
//                 <motion.div
//                   key={highlight.title}
//                   variants={fadeUp}
//                   whileHover={{
//                     y: -3,
//                     x: 3,
//                   }}
//                   transition={{
//                     duration: 0.25,
//                   }}
//                   className="group flex gap-4 rounded-2xl border border-white/10 bg-[#181818] p-5 transition-colors duration-300 hover:border-[#7C3AED]/40 hover:bg-[#202020]"
//                 >
//                   <motion.span
//                     whileHover={{
//                       scale: 1.08,
//                     }}
//                     className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 font-mono text-xs text-[#C4B5FD]"
//                   >
//                     0{index + 1}
//                   </motion.span>

//                   <div>
//                     <h3 className="text-sm font-semibold text-[#F5F5F5]">
//                       {highlight.title}
//                     </h3>

//                     <p className="mt-1.5 text-sm leading-6 text-[#71717A]">
//                       {highlight.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Developer Illustration */}
//           <motion.div
//             variants={slideRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: false,
//               amount: 0.25,
//             }}
//             className="relative mx-auto w-full max-w-xl"
//           >
//             {/* Purple Glow */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.05, 1],
//                 opacity: [0.45, 0.65, 0.45],
//               }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[#7C3AED]/10 blur-[90px]"
//             />

//             {/* Illustration */}
//             <motion.div
//               whileHover={{
//                 y: -5,
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease,
//               }}
//               className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] shadow-2xl shadow-black/40"
//             >
//               <img
//                 src="/about-developer.png"
//                 alt="Hritik Pandey - Developer Illustration"
//                 className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
//               />

//               {/* Subtle Gradient */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent" />

//               {/* Inner Violet Border */}
//               <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#7C3AED]/10 transition-all duration-500 group-hover:ring-[#7C3AED]/30" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    y: 35,
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
    scale: 0.97,
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

function About() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            01 / About
          </span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >
            <motion.h2
              variants={slideLeft}
              className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl"
            >
              {profile.about.heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg"
            >
              {profile.about.description}
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              className="mt-10 space-y-3"
            >
              {profile.about.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -3,
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-[#181818] p-5 transition-colors duration-300 hover:border-[#7C3AED]/40 hover:bg-[#202020]"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 font-mono text-xs text-[#C4B5FD]"
                  >
                    0{index + 1}
                  </motion.span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#F5F5F5]">
                      {highlight.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#71717A]">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Developer Illustration */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Purple Glow */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.45, 0.65, 0.45],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[#7C3AED]/10 blur-[90px]"
            />

            {/* Illustration */}
            <motion.button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              aria-label="Open developer illustration"
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] text-left shadow-2xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/70"
            >
              <img
                src="/about-developer.png"
                alt="Hritik Pandey - Developer Illustration"
                className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Subtle Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent" />

              {/* Inner Violet Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#7C3AED]/10 transition-all duration-500 group-hover:ring-[#7C3AED]/30" />

              {/* Zoom Hint */}
              <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                Click to expand
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded developer illustration"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 15,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
              className="relative max-h-[90vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src="/about-developer.png"
                alt="Hritik Pandey - Developer Illustration"
                className="mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black/60"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close image preview"
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-xl text-white/80 backdrop-blur-md transition-all duration-200 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-white sm:-right-4 sm:-top-4"
              >
                <span aria-hidden="true">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
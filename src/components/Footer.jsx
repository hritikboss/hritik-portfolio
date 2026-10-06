// import { motion } from "framer-motion";
// import profile from "../data/profile";

// function GithubIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-3.5 w-3.5"
//       aria-hidden="true"
//     >
//       <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.16 1.19a10.9 10.9 0 0 1 5.75 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.11 0 4.46-2.72 5.44-5.3 5.73.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
//     </svg>
//   );
// }

// function LinkedinIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-3.5 w-3.5"
//       aria-hidden="true"
//     >
//       <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.45v1.57h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.23h-3.6v-5.52c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.61H9.2V9Z" />
//     </svg>
//   );
// }

// function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="border-t border-white/10 bg-[#111111]"
//     >
//       <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
//         <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: 0.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <motion.a
//               href="#home"
//               whileHover={{ x: 3 }}
//               transition={{ duration: 0.2 }}
//               className="inline-flex items-center text-sm font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#C4B5FD]"
//             >
//               Hritik
//               <span className="text-[#7C3AED]">.</span>
//             </motion.a>

//             <p className="mt-1.5 text-xs text-[#52525B]">
//               Java Developer · Backend Developer · AI · Data
//             </p>
//           </motion.div>

//           {/* Links */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="flex flex-wrap items-center gap-5 text-xs text-[#71717A]"
//           >
//             <motion.a
//               href={profile.contact.github}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ y: -2 }}
//               transition={{ duration: 0.2 }}
//               className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C4B5FD]"
//             >
//               <GithubIcon />
//               GitHub
//               <span>↗</span>
//             </motion.a>

//             <motion.a
//               href={profile.contact.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ y: -2 }}
//               transition={{ duration: 0.2 }}
//               className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C4B5FD]"
//             >
//               <LinkedinIcon />
//               LinkedIn
//               <span>↗</span>
//             </motion.a>

//             <span className="hidden h-3 w-px bg-white/10 sm:block" />

//             <span>
//               © {new Date().getFullYear()} Hritik Pandey
//             </span>
//           </motion.div>
//         </div>

//         {/* Bottom Line */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.5,
//             delay: 0.25,
//           }}
//           className="mt-7 flex flex-col gap-2 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#3F3F46]">
//             Built with React · Tailwind CSS
//           </span>

//           <span className="font-mono text-[9px] text-[#3F3F46]">
//             Mumbai, India
//           </span>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// }

// export default Footer;
import { motion } from "framer-motion";
import profile from "../data/profile";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
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
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.45v1.57h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.23h-3.6v-5.52c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.61H9.2V9Z" />
    </svg>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-white/10 bg-[#111111]"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.a
              href="#home"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center text-sm font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#C4B5FD]"
            >
              Hritik
              <span className="text-[#7C3AED]">.</span>
            </motion.a>

            <p className="mt-1.5 text-xs text-[#52525B]">
              Java Developer · Backend Developer · AI · Data
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center gap-5 text-xs text-[#71717A]"
          >
            <motion.a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C4B5FD]"
            >
              <GithubIcon />
              GitHub
              <span>↗</span>
            </motion.a>

            <motion.a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C4B5FD]"
            >
              <LinkedinIcon />
              LinkedIn
              <span>↗</span>
            </motion.a>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span>© {new Date().getFullYear()} Hritik Pandey</span>
          </motion.div>
        </div>

        {/* Minimal Footer Accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 h-px origin-left bg-gradient-to-r from-[#7C3AED]/40 via-white/[0.06] to-transparent"
        />
      </div>
    </motion.footer>
  );
}

export default Footer;
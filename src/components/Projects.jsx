import { motion } from "framer-motion";
import {
  BarChart3,
  Cloud,
  Code2,
  Sparkles,
} from "lucide-react";
import projects from "../data/projects";

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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const featuredCardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
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
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            03 / Projects
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
            A selection of software, AI, cloud, and data projects exploring
            practical engineering problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
              index={index}
              variants={featuredCardVariants}
            />
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.1,
          }}
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
  index,
  variants,
}) {
  const isComingSoon = project.status === "coming-soon";
  const hasLiveDemo =
    !isComingSoon &&
    typeof project.live === "string" &&
    project.live.trim().length > 0;

  const iconMap = {
    "AI / LLM": Sparkles,
    "Full Stack": Code2,
    "Cloud / AWS": Cloud,
    "Data Analysis": BarChart3,
    "Machine Learning": Sparkles,
    Python: Code2,
  };

  const CategoryIcon = iconMap[project.category] || Code2;

  return (
    <motion.article
      variants={variants}
      whileHover={{
        y: -7,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
        ease,
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] transition-colors duration-300 hover:border-[#7C3AED]/40 hover:bg-[#1D1D1D] ${
        featured
          ? "min-h-[330px] p-7 sm:p-8"
          : "min-h-[280px] p-6"
      }`}
    >
      {/* Top Accent */}
      <motion.div
        className="absolute left-0 top-0 h-px bg-[#7C3AED]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{
          duration: 0.5,
          ease,
        }}
      />

      {/* Background Glow */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          {/* Category */}
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/10"
            >
              <CategoryIcon
                size={16}
                strokeWidth={1.8}
                color="#C4B5FD"
              />
            </motion.div>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7C3AED]">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`mt-3 font-semibold tracking-tight text-[#F5F5F5] ${
              featured
                ? "text-2xl sm:text-3xl"
                : "text-xl"
            }`}
          >
            {project.title}
          </h3>
        </div>

        {/* Status */}
        <motion.span
          whileHover={{
            scale: 1.04,
          }}
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider ${
            isComingSoon
              ? "border-white/10 bg-white/[0.03] text-[#71717A]"
              : "border-[#7C3AED]/25 bg-[#7C3AED]/10 text-[#C4B5FD]"
          }`}
        >
          {isComingSoon ? "Coming Soon" : "Project"}
        </motion.span>
      </div>

      {/* Description */}
      <p
        className={`relative mt-5 leading-7 text-[#A1A1AA] ${
          featured
            ? "max-w-xl text-sm sm:text-base"
            : "text-sm"
        }`}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.tech.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-[#111111] px-3 py-1.5 font-mono text-[10px] text-[#A1A1AA] transition-all duration-200 group-hover:text-[#C4B5FD]"
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      {!isComingSoon && (
        <div className="relative mt-7 flex items-center gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-lg border border-white/10 bg-[#111111] px-4 py-2.5 text-xs font-medium text-[#F5F5F5] transition-colors hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10"
            >
              GitHub
              <span className="ml-1.5 text-[#7C3AED]">
                ↗
              </span>
            </motion.a>
          )}

          {hasLiveDemo && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-lg bg-[#7C3AED] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/20"
            >
              Live Demo
              <span className="ml-1.5">
                ↗
              </span>
            </motion.a>
          )}
        </div>
      )}

      {/* Coming Soon */}
      {isComingSoon && (
        <div className="relative mt-7 flex items-center gap-2 font-mono text-[10px] text-[#52525B]">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
            animate={{
              opacity: [1, 0.35, 1],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          Currently in development
        </div>
      )}

      {/* Project Number */}
      <div className="absolute bottom-5 right-6 font-mono text-[10px] text-[#303030]">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.article>
  );
}

export default Projects;
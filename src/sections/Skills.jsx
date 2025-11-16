import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, level: 95 },
  { name: "CSS", icon: <SiCss3 />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript />, level: 85 },
  { name: "React", icon: <SiReact />, level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
  { name: "Git", icon: <SiGit />, level: 70 },
  { name: "GitHub", icon: <SiGithub />, level: 80 },
  { name: "Vercel", icon: <SiVercel />, level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-28 px-6" style={{ background: "var(--theme-bg)", color: "var(--theme-text)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-12 tracking-tight" style={{ color: "var(--theme-text)" }}
        >
          Skills
        </motion.h2>

        {/* Skills Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-16">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }} className="flex flex-col items-center gap-2 group" aria-label={`${skill.name} skill icon`}
            >
              <div
                className="text-4xl group-hover:scale-110 transition-transform"
                style={{ color: "var(--theme-accent)" }}
              >
                {skill.icon}
              </div>
              <span style={{ color: "var(--theme-text)" }} className="text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name + "-bar"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium" style={{ color: "var(--theme-text)" }}>
                  {skill.name}
                </span>
                <span className="text-sm" style={{ color: "var(--theme-text)" }}>
                  {skill.level}%
                </span>
              </div>
              <div
                className="w-full rounded-full h-2 overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`${skill.name} proficiency ${skill.level}%`}
                style={{ backgroundColor: "var(--theme-card)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




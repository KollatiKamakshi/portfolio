import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Product Feedback Platform",
    description:
      "A full-stack platform where users can submit, upvote, and discuss product feature requests. Includes authentication, comments, categories, and admin controls.",
    tech: ["React", "Django", "REST API", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://product-feedback-platform.netlify.app/purchase",
    // githubBackend:"https://github.com/KollatiKamakshi/product_feedback_platform",
    githubUrl: "https://github.com/KollatiKamakshi/feedback-frontend",
    
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, fully responsive portfolio built with React and Tailwind CSS. Smooth animations, dark/light theme, and optimized performance.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://kamakshiportfolio.netlify.app",
    githubUrl: "https://github.com/KollatiKamakshi/portfolio",
  },
  {
    title: "Osteoporosis & Osteopenia Prediction (Deep Learning)",
    description:
      "A deep learning model built using medical imaging datasets to classify osteoporosis and osteopenia using CNN architecture. Includes preprocessing pipeline and evaluation dashboards.",
    tech: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
    liveUrl: "https://huggingface.co/spaces/kollatikamakshi/osteoporosis-prediction",
    huggingfaceUrl: "https://huggingface.co/spaces/kollatikamakshi/osteoporosis-prediction/tree/main",
  },
  {
    title: "Smart-Travel",
    description: "",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl:"https://smart-travel-itinerary.vercel.app/",
    githubUrl: "https://github.com/KollatiKamakshi/smart-travel-itinerary",
  },
  {
    title: "Companies-directory",
    description: "A web application that allows users to browse and search for companies across various industries. Features filtering options and detailed company profiles.",
    tech: ["React", "CSS", "REST API"],
    liveUrl: "https://companies-directory-kamakshi.netlify.app/",
    githubUrl: "https://github.com/KollatiKamakshi/companies_directory",
  },
  {
    title: "Hospital patients flow ",
    description: "A web application to manage and visualize hospital patient flow data. Includes dashboards for tracking admissions, discharges, and bed occupancy rates.",
    tech: ["React", "Chart.js", "CSS"],
    liveUrl: "https://hospital-patients-flow.netlify.app/",
    githubUrl: "https://github.com/KollatiKamakshi/hospital-patient-flow",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-28 px-4" style={{ background: "var(--theme-bg)" }} >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-14"
          style={{ color: "var(--theme-text)" }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-6 border hover:shadow-xl hover:-translate-y-2 transition flex flex-col justify-between"
              style={{ backgroundColor: "var(--theme-card)",
                borderColor: "var(--theme-accent)", color: "var(--theme-text)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--theme-card)",
                      color: "var(--theme-text)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="flex justify-between items-center mt-6 pt-4 border-t"
                style={{ borderColor: "var(--theme-accent)" }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                  style={{ color: "var(--theme-text)" }}
                  aria-label={`Open live demo of ${project.title}`}
                >
                  Live <FiExternalLink />
                </a>

                <a
                  href={project.githubUrl || project.githubBackend || project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                  style={{ color: "var(--theme-text)" }}
                  aria-label={`Open GitHub repo for ${project.title}`}
                >
                  Code <FiGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { Typewriter } from "react-simple-typewriter";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen py-28 flex flex-col justify-center items-center text-center px-6"
      style={{ background: "var(--theme-bg)", color: "var(--theme-text)", scrollMarginTop: "64px" }}
    >
      <div className="max-w-3xl">
        {/* Animated Name */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-4"
          style={{ color: "var(--theme-accent)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Kamakshi
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mb-6"
          style={{ color: "var(--theme-text)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Typewriter
            words={["A Front-End Web Developer", "A React Enthusiast", "Machine Learning Engineer","Lifelong Learner"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Short Tagline */}
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--theme-text)" }}>
          I build responsive, interactive web experiences that blend clean design with smooth functionality.
          Let's turn ideas into reality.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Resume"
            title="Resume"
            className="text-gray-700 dark:text-gray-200 hover:text-themeAccent transform hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-themeAccent rounded"
          >
            <FaFilePdf size={20} />
          </a>
          <a
            href="https://github.com/KollatiKamakshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            title="GitHub"
            className="text-gray-700 dark:text-gray-200 hover:text-themeAccent transform hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-themeAccent rounded"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kollati-kamakshi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            title="LinkedIn"
            className="text-gray-700 dark:text-gray-200 hover:text-themeAccent transform hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-themeAccent rounded"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Call to Action Button */}
        <motion.a
          href="#projects"
          aria-label="Scroll to Projects section"
          title="Visit Projects"
          className="inline-block px-6 py-3 rounded-full font-medium transition duration-300 mt-8"
          style={{ backgroundColor: "var(--theme-card)", color: "var(--theme-text)",}}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-accent)";
            e.currentTarget.style.color = "var(--theme-bg)";
          }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-card)";
            e.currentTarget.style.color = "var(--theme-text)";
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          View my work
        </motion.a>
      </div>
    </section>
  );
}

export default Home;


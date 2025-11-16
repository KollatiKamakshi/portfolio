import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-28 px-6"
      style={{ background: "var(--theme-bg)", color: "var(--theme-text)" }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-14"
          style={{ color: "var(--theme-text)" }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center"
        >
          <h3 className="text-2xl font-semibold" style={{ color: "var(--theme-text)" }}>Let's Connect</h3>
          <p className="leading-relaxed" style={{ color: "var(--theme-text)" }}>
            I'm currently looking for internship and entry-level opportunities as a Web Developer.
            Feel free to reach out — I would love to collaborate or discuss opportunities!
          </p>

          <div className="space-y-4 text-lg">
            <p className="flex justify-center items-center gap-3">
              <FiMail style={{ color: "var(--theme-accent)" }} />
              <a
                href="mailto:kollatikamakshi21@gmail.com"
                className="hover:underline"
                aria-label="Send email to Chini"
                style={{ color: "var(--theme-text)" }}
              >
                kollatikamakshi21@gmail.com
              </a>
            </p>

            <p className="flex justify-center items-center gap-3">
              <FiMapPin style={{ color: "var(--theme-accent)" }} />
              <span>Bhimavaram, India</span>
            </p>
          </div>

          <div className="flex justify-center gap-5 mt-6">
            {[
              { icon: <FaLinkedin size={22} />, aria: "Open LinkedIn Profile", href: "https://www.linkedin.com/in/kollati-kamakshi/" },
              { icon: <FaGithub size={22} />, aria: "Open GitHub Profile", href: "https://github.com/KollatiKamakshi" },
              { icon: <FaFilePdf size={22} />, aria: "Download Resume PDF", href: "/resume.pdf" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.aria}
                className="p-3 rounded-full transition"
                style={{
                  backgroundColor: "var(--theme-card)",
                  color: "var(--theme-text)",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--theme-accent)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--theme-card)"}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

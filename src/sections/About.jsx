import Reveal from "./Reveal";
import { FaCode, FaLaptopCode, FaReact } from "react-icons/fa";

function About() {
  return (
    <section
      id="about" className="min-h-screen py-28 px-6" style={{ background: "var(--theme-bg)", color: "var(--theme-text)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Profile Picture */}
        <Reveal className="text-center mb-6">
          <img
            src="/profilepic.jpg"   // Replace with your image path
            alt="Kamakshi"
            className="mx-auto w-56 h-56 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-themeAccent shadow-lg transform transition duration-700 hover:scale-105"
          />
</Reveal>


        <Reveal className="text-center mb-10">
          <h2 className="text-4xl font-bold" style={{ color: "var(--theme-text)" }}>About Me</h2>
        </Reveal>

        <Reveal className="mb-12 text-center">
          <p style={{ color: "var(--theme-text)" }} className="text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold">Kamakshi</span>, a passionate{" "}
            <span style={{ color: "var(--theme-accent)" }} className="font-semibold">
              Front-End Web Developer
            </span>{" "}
            who loves building clean, responsive, and interactive web applications. As a fresher, I’m constantly learning and improving — especially in{" "}
            <span style={{ color: "var(--theme-accent)" }} className="font-semibold">React.js</span> and modern web technologies. My goal is to turn ideas into functional, user-friendly experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {[
            { icon: <FaCode size={40} />, title: "Clean Code", desc: "Writing readable, maintainable, and optimized code." },
            { icon: <FaLaptopCode size={40} />, title: "Responsive Design", desc: "Crafting layouts that look great on all screen sizes." },
            { icon: <FaReact size={40} />, title: "React Ecosystem", desc: "Building interactive UI with React and reusable components." },
          ].map((item, index) => (
            <Reveal key={index}>
              <div
                className="p-6 rounded-xl hover:shadow-lg transition duration-300"
                style={{ backgroundColor: "var(--theme-card)", color: "var(--theme-text)" }}
              >
                <div className="mx-auto mb-4" style={{ color: "var(--theme-accent)" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

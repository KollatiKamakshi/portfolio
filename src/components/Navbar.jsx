import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full shadow-md z-50" style={{ background: "var(--theme-bg)", color: "var(--theme-text)" }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold" style={{ color: "var(--theme-accent)" }}>
          💻 <span style={{ fontFamily: 'Playfair Display' }}>Kamakshi</span>’s’s Portfolio
        </h1>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="transition duration-300 font-medium" style={{ color: "var(--theme-text)" }}>
                <span className="hover:text-themeAccent">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block"> <ThemeToggle /> </div>
          <div className="md:hidden cursor-pointer" style={{ color: "var(--theme-text)" }} onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col items-center pb-4"
          style={{ background: "var(--theme-bg)", color: "var(--theme-text)" }}
        >
          {links.map((link) => (
            <li key={link.id} className="py-2">
              <a href={link.href} className="transition duration-300 font-medium" onClick={() => setMenuOpen(false)}>
                <span className="hover:text-themeAccent">{link.name}</span>
              </a>
            </li>
          ))}

          {/* Mobile ThemeToggle */}
          <li className="mt-4">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;


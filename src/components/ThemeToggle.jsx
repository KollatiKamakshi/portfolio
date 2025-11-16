import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiFeather, FiStar } from "react-icons/fi";

const themeIcons = {
  light: <FiSun />,
  dark: <FiMoon />,
  blue: <FiFeather />,
  purple: <FiStar />,
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const applyTheme = (selectedTheme) => {
    document.documentElement.classList.remove("dark", "blue-theme", "purple-theme");

    if (selectedTheme === "dark") document.documentElement.classList.add("dark");
    if (selectedTheme === "blue") document.documentElement.classList.add("blue-theme");
    if (selectedTheme === "purple") document.documentElement.classList.add("purple-theme");

    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-3">
      {Object.keys(themeIcons).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          aria-label={`Switch to ${t} theme`}
          className={`p-2 rounded-full transition border ${
            theme === t ? "bg-themeAccent text-white" : "bg-white dark:bg-blue-600/20"
          }`}
        >
          {themeIcons[t]}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;

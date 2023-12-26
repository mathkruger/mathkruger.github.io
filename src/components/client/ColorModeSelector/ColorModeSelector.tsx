import { useEffect, useState } from "react";
import styles from "./ColorModeSelector.module.css";

export default function ColorModeSelector() {
  const getInitialTheme = () => {
    if (localStorage && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "dark" | "light";
    }
  
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  
    return "light";
  };

  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme());

  useEffect(() => {
    const bodyElement = document.body;
    
    if (theme === "light") {
      bodyElement.classList.remove("dark");
    } else {
      bodyElement.classList.add("dark");
    }
  });

  const handleToggleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggleClick}
      className={`${styles.toggleButton} btn btn-ghost`}
    >
      {theme === "light" && <span>🌙</span>}
      {theme === "dark" && <span>☀️</span>}
    </button>
  );
}

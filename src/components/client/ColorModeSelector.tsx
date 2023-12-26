import { useEffect, useState } from "react";

export function ColorModeSelector() {
  const getInitialTheme = () => {
    if (window.localStorage && window.localStorage.getItem("theme")) {
      return window.localStorage.getItem("theme") as "dark" | "light";
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
    window.localStorage.setItem("theme", newTheme);

    setTheme(newTheme);
  };

  return (
    <button
      onClick={() => handleToggleClick()}
      style={{
        width: "30px",
        height: "25px",
        padding: "0 5px",
      }}
      className="btn btn-ghost"
    >
      {theme === "light" && <span>🌙</span>}
      {theme === "dark" && <span>☀️</span>}
    </button>
  );
}

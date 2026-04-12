import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <button className="theme-btn" onClick={() => setLight(p => !p)}>
      {light ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
"use client";

import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "none",
        cursor: "pointer",
        marginBottom: "1rem",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
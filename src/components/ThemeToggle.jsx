import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // always dark
  }, []);

  return null; // no button needed since it's always dark
};

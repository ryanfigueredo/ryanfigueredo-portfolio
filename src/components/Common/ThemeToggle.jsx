"use client";

import { Moon, Sun } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function ThemeToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = pathname === "/" || pathname?.startsWith("/dark");

  const handleToggle = () => {
    router.push(isDark ? "/light" : "/");
  };

  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="nav-icon-button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Icon size={18} />
    </button>
  );
}

export default ThemeToggle;

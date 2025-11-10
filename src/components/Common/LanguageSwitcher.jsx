"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const options = [
  { code: "en", label: "English", icon: "/eng.svg" },
  { code: "pt", label: "Português", icon: "/br.svg" },
];

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      {options.map((option) => {
        const isActive = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            className={`language-button${isActive ? " active" : ""}`}
            onClick={() => setLanguage(option.code)}
            aria-label={`Switch to ${option.label}`}
          >
            <Image
              src={option.icon}
              alt={option.label}
              width={20}
              height={20}
              className="language-flag"
            />
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;

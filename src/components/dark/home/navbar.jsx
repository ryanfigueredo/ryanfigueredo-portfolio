"use client";

import LanguageSwitcher from "@/components/Common/LanguageSwitcher";
import ThemeToggle from "@/components/Common/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

function Navbar() {
  const { dictionary } = useLanguage();
  const { nav } = dictionary;

  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            {nav.links.map((link) => {
              const attrs = {};
              if (typeof link.scroll === "number") {
                attrs["data-scroll-nav"] = link.scroll;
              }
              return (
                <li className="nav-item" key={`${link.label}-${link.href}`}>
                  <a href={link.href} {...attrs}>
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
            <li className="nav-item">
              <div className="nav-controls">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

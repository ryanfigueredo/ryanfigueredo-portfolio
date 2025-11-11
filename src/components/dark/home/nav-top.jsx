"use client";

import LanguageSwitcher from "@/components/Common/LanguageSwitcher";
import ThemeToggle from "@/components/Common/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

function NavTop() {
  const { dictionary } = useLanguage();
  const { navTop } = dictionary;
  const [firstName, ...lastNameParts] = navTop.name.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/" className="logo logo-text">
              {firstName} {lastName && <span>{lastName}</span>}
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width nav-controls">
              <a
                href={navTop.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={navTop.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={navTop.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="whatsapp-icon"
              >
                <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" />
              </a>
              <a
                href={navTop.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href={`mailto:${navTop.email}`}>
                  <span className="sub-title fz-12">{navTop.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;

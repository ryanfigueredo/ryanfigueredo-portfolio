"use client";

import { useLanguage } from "@/context/LanguageContext";

function Profile() {
  const { dictionary } = useLanguage();
  const { hero, navTop } = dictionary;

  return (
    <section className="intro-profile md-mb50" id="about">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img
                  src="/assets/imgs/header/profile.jpg"
                  alt="Ryan Figueredo"
                />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>{hero.name}</h5>
                <p className="fz-13 text-u">{hero.availability}</p>
              </div>
              <div className="social text-center mt-20">
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            {hero.heading} <span className="main-color">{hero.name}</span>,{" "}
            {hero.description}{" "}
            <span className="bord">
              {hero.highlight} <i></i>
            </span>{" "}
            {hero.location}
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center flex-wrap">
              {hero.stats.map((item) => (
                <div className="mr-40" key={item.value}>
                  <div className="d-flex align-items-center">
                    <h2>{item.value}</h2>
                    <p>
                      {item.line1} <br /> {item.line2}
                    </p>
                  </div>
                </div>
              ))}
              <div className="cv-download" style={{ marginTop: "20px" }}>
                <span className="d-block fz-12 text-u opacity-7 mb-15">
                  {hero.cv.label}
                </span>
                <div
                  className="cv-links"
                  style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
                >
                  <div className="butn-presv">
                    <a
                      href="/CurriculoRyan2025-BR.pdf"
                      className="butn butn-md butn-bord radius-5 skew"
                      download
                    >
                      <span>{hero.cv.pt}</span>
                    </a>
                  </div>
                  <div className="butn-presv">
                    <a
                      href="/EN-CurriculoRyan2025.pdf"
                      className="butn butn-md butn-bord radius-5 skew"
                      download
                    >
                      <span>{hero.cv.en}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

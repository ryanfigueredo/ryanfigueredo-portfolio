"use client";

import { useLanguage } from "@/context/LanguageContext";
import lightSkillsData from "@/ldata/home/skills.json";

function Skills() {
  const { dictionary } = useLanguage();
  const { skills } = dictionary;

  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      data-scroll-index="2"
      id="sobre"
    >
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">{skills.subtitle}</h6>
            <h3>{skills.title}</h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {skills.bars.map((item, index) => {
              const icon =
                lightSkillsData[index]?.photo ?? lightSkillsData[0]?.photo;

              return (
              <div key={item.title} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                      <div className="img icon-img-40">
                        <img
                          src={icon}
                          alt={item.title}
                          className="skill-icon skill-icon--light"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.title}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span className="progres" data-value={item.percent}></span>
                  </div>
                  <span className="value">{item.percent}</span>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="awards mt-100">
        <div className="row md-marg">
          {skills.certifications.map((item, index) => (
            <div key={`${item.title}-${item.year}`} className="col-lg-4">
              <div
                className="award-item sub-bg md-mb30 wow fadeInUp"
                data-wow-delay={`.${index + 2}s`}
              >
                <div className="d-flex">
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="ml-auto">
                    <span>{item.year}</span>
                  </div>
                </div>
                <div className="img icon-img-100 mt-80 mb-30">
                  <img src="/light/assets/imgs/awards/1.png" alt="" />
                </div>
                <h6>Certificação & Formação</h6>
                <span className="sub-title main-color mt-10">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

"use client";

import { useLanguage } from "@/context/LanguageContext";

function Price() {
  const { dictionary } = useLanguage();
  const { pricing } = dictionary;

  return (
    <div
      className="sec-box price section-padding"
      data-scroll-index="4"
      id="pricing"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">{pricing.subtitle}</h6>
            <h3>{pricing.title}</h3>
          </div>
        </div>
      </div>
      <div className="row md-marg">
        {pricing.plans.map((plan, index) => (
          <div className="col-lg-4 valign" key={plan.name}>
            <div
              className="item full-width md-mb50 wow fadeIn"
              data-wow-delay={`.${(index + 2) * 2}s`}
            >
              <div className="top-curv">
                <span className="left"></span>
                <h6 className="type">{plan.name}</h6>
                <span className="right"></span>
              </div>

              <div className="content">
                <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                  <h2 className="main-color">{plan.price}</h2>
                  <p className="ml-20 fz-20">/ {plan.period}</p>
                </div>
                <div className="feat">
                  <ul className="rest">
                    {plan.features.map((feat) => (
                      <li key={feat}>
                        <i className="fas fa-check"></i> <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-50">
                  <div className="butn-presv">
                    <a
                      href="#contact"
                      className="butn butn-md butn-bord radius-5 text-u full-width"
                    >
                      <span>{pricing.cta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;

'use client';

import { useLanguage } from '@/context/LanguageContext';

function Portfolio() {
  const { dictionary } = useLanguage();
  const { portfolio } = dictionary;

  return (
    <div className="sec-box portfolio section-padding" data-scroll-index="3" id="portfolio">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">{portfolio.subtitle}</h6>
            <h3>{portfolio.title}</h3>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <a href="/light/works" className="d-flex">
                <span>
                  {portfolio.cta}{' '}
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {portfolio.items.slice(0, 4).map((item, index) => (
            <div key={item.title} className="col-lg-6 items">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="img">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`/light/assets/imgs/works/${(index % 4) + 1}.jpg`}
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.category}</span>
                    <h6 className="line-height-1">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h6>
                    <p className="mt-10 opacity-7 fz-14">{item.description}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

'use client';

import LanguageSwitcher from '@/components/Common/LanguageSwitcher';
import ThemeToggle from '@/components/Common/ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';

function Nav() {
  const { dictionary } = useLanguage();
  const { nav, navTop } = dictionary;
  const [firstName, ...lastNameParts] = navTop.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/light" className="logo logo-text">
              {firstName} {lastName && <span>{lastName}</span>}
            </a>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-9 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    {nav.links.map((link) => {
                      const attrs = {};
                      if (typeof link.scroll === 'number') {
                        attrs['data-scroll-nav'] = link.scroll;
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

export default Nav;

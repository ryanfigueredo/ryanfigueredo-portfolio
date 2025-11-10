'use client';

import { useLanguage } from '@/context/LanguageContext';

function Footer() {
  const { dictionary } = useLanguage();
  const { footer } = dictionary;
  const year = new Date().getFullYear();

  return (
    <footer className="pb-30 pt-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="fz-13">{footer.text.replace('{year}', year)}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

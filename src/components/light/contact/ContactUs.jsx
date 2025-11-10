'use client';

import { useLanguage } from '@/context/LanguageContext';

function ContactUs() {
  const { dictionary } = useLanguage();
  const { nav } = dictionary;

  return (
    <div className="contact-fixed-butn">
      <div className="butn-presv">
        <a href="#contact" className="butn butn-sm bg-white skew" data-scroll-nav="5">
          <span className="text-dark">{nav.cta}</span>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;

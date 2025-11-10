"use client";

import { useLanguage } from "@/context/LanguageContext";

function Info() {
  const { dictionary } = useLanguage();
  const { contact } = dictionary;

  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
      id="contact"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">{contact.subtitle}</h6>
            <h2 className="fz-50">{contact.title}</h2>
            <p className="fz-15 mt-10">{contact.description}</p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="main-color"
              >
                {contact.phone}
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              {contact.socials.map((social) => (
                <li className="mr-30" key={social.label}>
                  <a
                    href={social.url}
                    className="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover-anim">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form
              id="contact-form"
              method="post"
              action="mailto:ryan@dmtn.com.br"
              encType="text/plain"
            >
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder={contact.form.namePlaceholder}
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder={contact.form.emailPlaceholder}
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder={contact.form.subjectPlaceholder}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder={contact.form.messagePlaceholder}
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="mt-30">
                    <button type="submit">
                      <span className="text">{contact.form.button}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

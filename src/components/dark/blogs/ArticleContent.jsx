'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';

function ArticleContent({ post }) {
  const { language, dictionary } = useLanguage();
  const { blogPage } = dictionary;

  const content = useMemo(() => {
    return post.translations[language] || post.translations.en;
  }, [language, post.translations]);

  const formattedDate = useMemo(() => {
    return new Date(post.date).toLocaleDateString(
      language === 'pt' ? 'pt-BR' : 'en-US',
      { day: '2-digit', month: 'long', year: 'numeric' }
    );
  }, [language, post.date]);

  return (
    <article className="sec-box section-padding">
      <header className="article-hero">
        <div className="meta mb-30">
          <span className="tag-pill small main">{content.tags[0]}</span>
          <span className="date ml-15 opacity-7">
            <i className="fas fa-calendar-alt mr-10 main-color"></i>
            {formattedDate} · {content.readTime}
          </span>
        </div>
        <h1 className="fz-45 mb-20">{content.title}</h1>
        <p className="fz-18 opacity-7">{content.excerpt}</p>
        <div className="hero-img mt-40">
          <img src={post.heroImage} alt={content.title} />
        </div>
      </header>

      <div className="article-body mt-60">
        {content.sections.map((section) => (
          <section key={`${post.slug}-${section.heading}`} className="article-section mb-50">
            <h2 className="fz-28 mb-15">{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="fz-16 opacity-8 mb-15">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <footer className="article-footer">
        <div className="d-flex align-items-center justify-content-between mt-50">
          <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
            {content.tags.map((tag) => (
              <span key={`${post.slug}-${tag}`} className="tag-pill small">
                {tag}
              </span>
            ))}
          </div>
          <a href="/dark/blogs" className="text-u fz-12 opacity-7">
            {blogPage.moreTitle}
          </a>
        </div>
      </footer>
    </article>
  );
}

export default ArticleContent;

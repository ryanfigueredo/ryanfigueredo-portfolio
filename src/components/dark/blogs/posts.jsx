'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/data/blog/posts';

function Posts() {
  const { dictionary, language } = useLanguage();
  const { blogPage } = dictionary;

  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, []);

  const formattedPosts = sortedPosts.map((post) => {
    const content = post.translations[language] || post.translations.en;
    const formattedDate = new Date(post.date).toLocaleDateString(
      language === 'pt' ? 'pt-BR' : 'en-US',
      { day: '2-digit', month: 'short', year: 'numeric' }
    );

    return {
      slug: post.slug,
      coverImage: post.coverImage,
      title: content.title,
      excerpt: content.excerpt,
      readTime: content.readTime,
      tags: content.tags,
      date: formattedDate,
    };
  });

  if (!formattedPosts.length) {
    return null;
  }

  const [, ...rest] = formattedPosts;

  return (
    <section className="sec-box blog section-padding pt-0">
      <div className="row">
        <div className="col-12">
          <div className="sec-head bord-thin-bottom pb-20 mb-80">
            <h4 className="sub-title fz-28">{blogPage.moreTitle}</h4>
          </div>
        </div>
      </div>
      <div className="row md-marg">
        {rest.map((item) => (
          <div key={item.slug} className="col-lg-4">
            <div className="item md-mb30 mb-30">
              <div className="img">
                <img src={item.coverImage} alt={item.title} />
              </div>
              <div className="box">
                <div className="cont">
                  <span className="date">
                    <i className="fas fa-calendar-alt mr-10 main-color"></i> {item.date} · {item.readTime}
                  </span>
                  <h5>
                    <a href={`/dark/blogs/${item.slug}`}>{item.title}</a>
                  </h5>
                  <p className="mt-15 opacity-7 fz-14">{item.excerpt}</p>
                </div>
                <div className="info d-flex align-items-center">
                  <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={`${item.slug}-${tag}`} className="tag-pill small">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="ml-auto">
                    <a href={`/dark/blogs/${item.slug}`}>
                      {blogPage.readMore}{' '}
                      <svg
                        className="ml-5"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Posts;

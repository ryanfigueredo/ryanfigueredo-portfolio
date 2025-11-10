import ContactUs from '@/components/dark/contact/ContactUs';
import Footer from '@/components/dark/blogs/footer';
import Nav from '@/components/dark/blogs/nav';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import ProgressScroll from '@/components/Common/ProgressScroll';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog/posts';
import ArticleContent from '@/components/dark/blogs/ArticleContent';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function ArticlePage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main className="container blog-article">
        <ArticleContent post={post} />
      </main>

      <Footer />

      <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery-migrate-3.4.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

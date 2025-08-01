'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import LandHeader from '@/components/LandingHeader';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

export default function BlogPage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI-Powered Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build applications, from code generation to automated testing.',
      content: 'Full article content here...',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/site-icon.png',
      featured: true
    },
    {
      id: '2',
      title: 'Building Scalable Applications with Modern Frameworks',
      excerpt: 'Learn the best practices for creating applications that can handle millions of users while maintaining performance.',
      content: 'Full article content here...',
      author: 'Ahmed Hassan',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Development',
      image: '/site-icon.png',
      featured: true
    },
    {
      id: '3',
      title: 'The Art of User Experience in AI Applications',
      excerpt: 'Discover how to design intuitive interfaces that make complex AI functionality accessible to everyday users.',
      content: 'Full article content here...',  
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'UX Design',
      image: '/site-icon.png',
      featured: false
    },
    {
      id: '4',
      title: 'Security Best Practices for AI-Driven Platforms',
      excerpt: 'Essential security considerations when building and deploying AI-powered applications in production environments.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Security',
      image: '/site-icon.png',
      featured: false
    },
    {
      id: '5',
      title: 'From Idea to Launch: Our Product Development Journey',
      excerpt: 'Behind the scenes look at how we built Banild AI from concept to a fully functional platform.',
      content: 'Full article content here...',
      author: 'Banild Team',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Company',
      image: '/site-icon.png',
      featured: false
    },
    {
      id: '6',
      title: 'Machine Learning Models: A Beginner\'s Guide',
      excerpt: 'Understanding the fundamentals of machine learning and how to choose the right model for your project.',
      content: 'Full article content here...',
      author: 'Dr. Lisa Zhang',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Machine Learning',
      image: '/site-icon.png',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <LandHeader />
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('blog.featured')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`flex items-center text-sm text-gray-500 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{post.author}</span>
                    <span className={`mx-2 ${isRTL ? 'hidden' : ''}`}>•</span>
                    <span className={`mx-2 ${isRTL ? '' : 'hidden'}`}>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className={`mx-2 ${isRTL ? 'hidden' : ''}`}>•</span>
                    <span className={`mx-2 ${isRTL ? '' : 'hidden'}`}>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Link href={`/blog/${post.id}`} className="hover:text-gray-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className={`text-gray-600 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className={`inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('blog.readMore')}
                    <svg
                      className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('blog.recent')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`flex items-center text-sm text-gray-500 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{post.author}</span>
                    <span className={`mx-2 ${isRTL ? 'hidden' : ''}`}>•</span>
                    <span className={`mx-2 ${isRTL ? '' : 'hidden'}`}>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h3 className={`text-lg font-bold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Link href={`/blog/${post.id}`} className="hover:text-gray-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className={`text-gray-600 text-sm mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className={`inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('blog.readMore')}
                    <svg
                      className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('blog.newsletter.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('blog.newsletter.subtitle')}
          </p>
          <div className={`flex max-w-md mx-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder')}
              className={`flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${isRTL ? 'text-right rounded-r-none' : 'rounded-r-none text-left'}`}
            />
            <button className={`bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors ${isRTL ? 'rounded-r-lg rounded-l-none' : 'rounded-l-none rounded-r-lg'}`}>
              {t('blog.newsletter.subscribe')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

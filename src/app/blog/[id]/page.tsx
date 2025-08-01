'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { useParams } from 'next/navigation';

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

export default function BlogPostPage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Sample blog posts data (same as blog listing page)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI-Powered Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build applications, from code generation to automated testing.',
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence is transforming the software development landscape at an unprecedented pace. From automated code generation to intelligent testing frameworks, AI is becoming an indispensable tool for developers worldwide.</p>
        
        <h2>The Current State of AI in Development</h2>
        <p>Today's AI-powered development tools are already making significant impacts across the industry. Code completion tools like GitHub Copilot and Tabnine are helping developers write code faster and with fewer bugs. These tools use machine learning models trained on millions of lines of code to predict and suggest relevant code snippets.</p>
        
        <h2>Automated Testing and Quality Assurance</h2>
        <p>AI is revolutionizing how we approach testing and quality assurance. Machine learning algorithms can now identify potential bugs and security vulnerabilities before they reach production. Automated testing frameworks powered by AI can generate comprehensive test cases and even self-healing tests that adapt to changes in the application.</p>
        
        <h2>The Future Landscape</h2>
        <p>Looking ahead, we can expect even more sophisticated AI integration in development workflows. Natural language programming, where developers can describe functionality in plain English and have AI generate the corresponding code, is becoming increasingly viable.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While AI offers tremendous opportunities, it also presents challenges. Developers need to understand when to trust AI suggestions and when to rely on their own expertise. There's also the important consideration of maintaining code quality and ensuring that AI-generated code aligns with project standards and best practices.</p>
        
        <h2>Conclusion</h2>
        <p>The future of AI-powered development is bright and full of possibilities. As these tools continue to evolve, they will enable developers to focus more on creative problem-solving and less on repetitive tasks, ultimately leading to more innovative and robust software solutions.</p>
      `,
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
      content: `
        <h2>Understanding Scalability</h2>
        <p>Scalability is the ability of an application to handle increased load without compromising performance. This involves both horizontal scaling (adding more servers) and vertical scaling (upgrading existing hardware).</p>
        
        <h2>Modern Framework Advantages</h2>
        <p>Modern frameworks like Next.js, React, and Node.js provide built-in features that help developers create scalable applications from the ground up. These include server-side rendering, automatic code splitting, and optimized bundling.</p>
        
        <h2>Database Optimization</h2>
        <p>Choosing the right database architecture is crucial for scalability. NoSQL databases like MongoDB and DynamoDB offer horizontal scaling capabilities, while traditional SQL databases can be optimized through proper indexing and query optimization.</p>
        
        <h2>Caching Strategies</h2>
        <p>Implementing effective caching strategies can dramatically improve application performance. This includes browser caching, CDN caching, and server-side caching using tools like Redis or Memcached.</p>
        
        <h2>Microservices Architecture</h2>
        <p>Breaking down monolithic applications into microservices allows for better scalability and maintainability. Each service can be scaled independently based on demand, leading to more efficient resource utilization.</p>
      `,
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
      content: `
        <h2>The UX Challenge in AI</h2>
        <p>Designing user experiences for AI-powered applications presents unique challenges. The complexity of AI systems needs to be abstracted away while still providing users with control and understanding of what's happening behind the scenes.</p>
        
        <h2>Principles of AI UX Design</h2>
        <p>Successful AI UX design follows several key principles: transparency, control, feedback, and trust. Users should understand what the AI is doing, have control over its actions, receive clear feedback, and trust the system's recommendations.</p>
        
        <h2>Progressive Disclosure</h2>
        <p>Not all users need to see the full complexity of AI systems. Progressive disclosure allows advanced users to access detailed controls while keeping the interface simple for casual users.</p>
        
        <h2>Handling Uncertainty</h2>
        <p>AI systems often work with probabilities and uncertainties. Good UX design communicates this uncertainty to users in understandable ways, using confidence indicators and alternative suggestions.</p>
      `,
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'UX Design',
      image: '/site-icon.png',
      featured: false
    },
    // Add more posts as needed...
  ];

  useEffect(() => {
    const currentPost = blogPosts.find(p => p.id === params.id);
    setPost(currentPost || null);
    
    // Get related posts (same category, excluding current post)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [params.id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Back to Blog */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className={`inline-flex items-center text-gray-600 hover:text-gray-900 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <svg 
              className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('blog.backToBlog')}
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category */}
        <div className={`mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          {post.title}
        </h1>

        {/* Meta */}
        <div className={`flex items-center text-gray-600 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="font-medium">{post.author}</span>
          <span className={`mx-3 ${isRTL ? 'hidden' : ''}`}>•</span>
          <span className={`mx-3 ${isRTL ? '' : 'hidden'}`}>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span className={`mx-3 ${isRTL ? 'hidden' : ''}`}>•</span>
          <span className={`mx-3 ${isRTL ? '' : 'hidden'}`}>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Featured Image */}
        <div className="aspect-video relative overflow-hidden rounded-xl mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className={`prose prose-lg max-w-none ${isRTL ? 'prose-rtl' : ''}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
              <h3 className={`text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                {post.author}
              </h3>
              <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('blog.author.bio')}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-8 text-center`}>
              {t('blog.relatedPosts')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className={`text-lg font-bold text-gray-900 mt-3 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-gray-700 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className={`text-gray-600 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 
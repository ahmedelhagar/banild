'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import LandHeader from '@/components/Landing/LandingHeader';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  techStack: string[];
  image: string;
  featured: boolean;
  price: 'Free' | 'Pro';
  demoUrl?: string;
  sourceUrl?: string;
}

export default function TemplatesPage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Sample templates data
  const templates: Template[] = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Platform',
      description: 'Complete e-commerce solution with AI-driven product recommendations, smart search, and automated customer support.',
      category: 'E-commerce',
      difficulty: 'Advanced',
      techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenAI API', 'Stripe'],
      image: '/site-icon.png',
      featured: true,
      price: 'Pro',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '2',
      title: 'Smart Dashboard Analytics',
      description: 'Interactive dashboard with AI-powered insights, real-time data visualization, and predictive analytics.',
      category: 'Dashboard',
      difficulty: 'Intermediate',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      image: '/site-icon.png',
      featured: true,
      price: 'Free',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '3',
      title: 'AI Content Generator',
      description: 'Generate blog posts, social media content, and marketing copy using advanced AI language models.',
      category: 'Content',
      difficulty: 'Beginner',
      techStack: ['Next.js', 'OpenAI API', 'TailwindCSS', 'Vercel'],
      image: '/site-icon.png',
      featured: false,
      price: 'Free',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '4',
      title: 'Intelligent Chatbot Platform',
      description: 'Build and deploy AI chatbots with natural language processing, context awareness, and multi-platform support.',
      category: 'AI Assistant',
      difficulty: 'Advanced',
      techStack: ['Node.js', 'Socket.io', 'TensorFlow', 'MongoDB', 'Docker'],
      image: '/site-icon.png',
      featured: false,
      price: 'Pro',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '5',
      title: 'Modern Landing Page Builder',
      description: 'Create stunning landing pages with AI-assisted design suggestions and conversion optimization.',
      category: 'Landing Page',
      difficulty: 'Beginner',
      techStack: ['React', 'Framer Motion', 'TailwindCSS', 'Netlify'],
      image: '/site-icon.png',
      featured: false,
      price: 'Free',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '6',
      title: 'AI Image Processing API',
      description: 'RESTful API for image classification, object detection, and automated image enhancement.',
      category: 'API',
      difficulty: 'Intermediate',
      techStack: ['Python', 'FastAPI', 'OpenCV', 'TensorFlow', 'AWS S3'],
      image: '/site-icon.png',
      featured: false,
      price: 'Pro',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '7',
      title: 'Smart Task Management App',
      description: 'Task management with AI-powered priority suggestions, deadline predictions, and productivity insights.',
      category: 'Productivity',
      difficulty: 'Intermediate',
      techStack: ['Vue.js', 'Express.js', 'MySQL', 'Chart.js', 'PWA'],
      image: '/site-icon.png',
      featured: false,
      price: 'Free',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '8',
      title: 'AI-Driven Social Media Scheduler',
      description: 'Schedule and optimize social media posts with AI-powered best time predictions and content analysis.',
      category: 'Social Media',
      difficulty: 'Advanced',
      techStack: ['React Native', 'GraphQL', 'Redis', 'Twitter API', 'ML.js'],
      image: '/site-icon.png',
      featured: false,
      price: 'Pro',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: '9',
      title: 'Personal Finance Tracker',
      description: 'Track expenses with AI categorization, spending predictions, and personalized financial advice.',
      category: 'Finance',
      difficulty: 'Beginner',
      techStack: ['Flutter', 'Firebase', 'Chart.js', 'Plaid API'],
      image: '/site-icon.png',
      featured: false,
      price: 'Free',
      demoUrl: '#',
      sourceUrl: '#'
    }
  ];

  const categories = ['All', ...Array.from(new Set(templates.map(t => t.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTemplates = templates.filter(template => {
    const categoryMatch = selectedCategory === 'All' || template.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || template.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const featuredTemplates = filteredTemplates.filter(t => t.featured);
  const regularTemplates = filteredTemplates.filter(t => !t.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <LandHeader />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('templates.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('templates.subtitle')}
            </p>
            <div className="flex justify-center">
              <Link
                href="/pricing"
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                {t('templates.getPro')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className={`flex flex-wrap gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('templates.category')}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('templates.difficulty')}
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Templates */}
        {featuredTemplates.length > 0 && (
          <section className="mb-16">
            <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('templates.featured')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredTemplates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        {template.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(template.difficulty)}`}>
                        {template.difficulty}
                      </span>
                      {template.price === 'Pro' && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Pro
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {template.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {template.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {template.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Link
                        href={template.demoUrl || '#'}
                        className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition-colors"
                      >
                        {t('templates.preview')}
                      </Link>
                      <Link
                        href={template.sourceUrl || '#'}
                        className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-center hover:bg-gray-50 transition-colors"
                      >
                        {t('templates.useTemplate')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Templates */}
        <section>
          <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {selectedCategory === 'All' ? t('templates.allTemplates') : `${selectedCategory} ${t('templates.templates')}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
                      {template.category}
                    </span>
                    {template.price === 'Pro' && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Pro
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <h3 className={`text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {template.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
                      {template.difficulty}
                    </span>
                  </div>
                  <p className={`text-gray-600 text-sm mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {template.description}
                  </p>
                  <div className={`flex flex-wrap gap-1 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {template.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {template.techStack.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{template.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Link
                      href={template.demoUrl || '#'}
                      className="flex-1 bg-black text-white px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-800 transition-colors"
                    >
                      {t('templates.preview')}
                    </Link>
                    <Link
                      href={template.sourceUrl || '#'}
                      className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-50 transition-colors"
                    >
                      {t('templates.use')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('templates.cta.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('templates.cta.subtitle')}
          </p>
          <div className={`flex justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              href="/pricing"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {t('templates.cta.upgrade')}
            </Link>
            <Link
              href="/contact"  
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              {t('templates.cta.request')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

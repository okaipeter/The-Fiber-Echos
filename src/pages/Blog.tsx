import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaTags } from 'react-icons/fa'

type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  tags: string[]
  category: 'education' | 'tips' | 'knowledge'
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | BlogPost['category']>('all')

  // Dummy data for blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The True Cost of Fast Fashion',
      excerpt: 'Understanding the environmental and social impact of our clothing choices.',
      content: '...',
      author: 'Lauren Goodwin',
      date: '2024-04-15',
      image: '/blog/fast-fashion.jpg',
      tags: ['sustainability', 'environment', 'fashion industry'],
      category: 'education',
    },
    {
      id: 2,
      title: '5 Tips for a Sustainable Wardrobe',
      excerpt: 'Practical steps to build a more sustainable and conscious wardrobe.',
      content: '...',
      author: 'Sarah Mensah',
      date: '2024-04-10',
      image: '/blog/wardrobe-tips.jpg',
      tags: ['tips', 'wardrobe', 'sustainable living'],
      category: 'tips',
    },
    {
      id: 3,
      title: 'Understanding Textile Recycling',
      excerpt: 'A comprehensive guide to textile recycling and its importance.',
      content: '...',
      author: 'Kwame Osei',
      date: '2024-04-05',
      image: '/blog/textile-recycling.jpg',
      tags: ['recycling', 'textiles', 'education'],
      category: 'knowledge',
    },
    // Add more posts as needed
  ]

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'education', label: 'Education' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'knowledge', label: 'Textile Knowledge' },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Blog & Resources
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
              />
              <FaSearch className="absolute left-3 top-3 text-earth-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-earth-600 text-white'
                      : 'bg-earth-100 text-earth-800 hover:bg-earth-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-earth-600 mb-2">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="text-xl font-serif mb-3">{post.title}</h3>
                <p className="text-earth-700 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-earth-100 text-earth-700"
                    >
                      <FaTags className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="btn btn-secondary w-full"
                  onClick={() => {
                    // In a real application, this would navigate to the full article
                    alert('Full article view coming soon!')
                  }}
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-earth-700">
              No articles found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog 
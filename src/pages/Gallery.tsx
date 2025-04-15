import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaFilter, FaPlay, FaImage } from 'react-icons/fa'

type MediaItem = {
  id: number
  type: 'image' | 'video'
  src: string
  title: string
  category: string
  description: string
  tags: string[]
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Enhanced gallery items with Unsplash images
  const galleryItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60',
      title: 'Sustainable Fashion Showcase',
      category: 'events',
      description: 'Our latest sustainable fashion showcase featuring upcycled designs from local artisans.',
      tags: ['fashion', 'sustainability', 'showcase']
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/textile-workshop.mp4',
      title: 'Textile Recycling Workshop',
      category: 'workshops',
      description: 'Learn the art of textile recycling and upcycling in our hands-on workshop.',
      tags: ['workshop', 'recycling', 'education']
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60',
      title: 'Community Swap Event',
      category: 'events',
      description: 'Monthly clothing swap event bringing together fashion enthusiasts and sustainability advocates.',
      tags: ['swap', 'community', 'sustainability']
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=60',
      title: 'Natural Dye Workshop',
      category: 'workshops',
      description: 'Exploring traditional natural dyeing techniques with local experts.',
      tags: ['workshop', 'natural', 'dyeing']
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60',
      title: 'Upcycled Collection',
      category: 'designs',
      description: 'Showcase of our latest upcycled fashion pieces created from reclaimed materials.',
      tags: ['upcycling', 'design', 'collection']
    },
    {
      id: 6,
      type: 'video',
      src: '/videos/fashion-panel.mp4',
      title: 'Sustainable Fashion Panel',
      category: 'events',
      description: 'Industry experts discuss the future of sustainable fashion in Africa.',
      tags: ['panel', 'sustainability', 'fashion']
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=60',
      title: 'Zero Waste Workshop',
      category: 'workshops',
      description: 'Learn how to create zero waste patterns and designs.',
      tags: ['workshop', 'zero-waste', 'design']
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=60',
      title: 'Community Art Installation',
      category: 'events',
      description: 'Collaborative art installation using recycled textiles.',
      tags: ['art', 'community', 'installation']
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581784368651-8916092072fc?w=800&auto=format&fit=crop&q=60',
      title: 'Sustainable Fashion Workshop',
      category: 'workshops',
      description: 'Local designers sharing sustainable fashion techniques with the community.',
      tags: ['workshop', 'design', 'education']
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60',
      title: 'Textile Dying Process',
      category: 'workshops',
      description: 'Traditional textile dying techniques using natural materials.',
      tags: ['crafts', 'traditional', 'dyeing']
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60',
      title: 'Sustainable Collection',
      category: 'designs',
      description: 'Showcasing our latest sustainable fashion collection.',
      tags: ['fashion', 'collection', 'sustainable']
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60',
      title: 'Fabric Upcycling',
      category: 'workshops',
      description: 'Creative upcycling workshop turning old fabrics into new treasures.',
      tags: ['upcycling', 'creativity', 'workshop']
    },
    {
      id: 13,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60',
      title: 'Fashion Revolution Day',
      category: 'events',
      description: 'Community gathering to celebrate sustainable fashion and ethical practices.',
      tags: ['event', 'community', 'revolution']
    },
    {
      id: 14,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?w=800&auto=format&fit=crop&q=60',
      title: 'Textile Weaving Demo',
      category: 'workshops',
      description: 'Traditional weaving techniques demonstration by local artisans.',
      tags: ['weaving', 'traditional', 'artisan']
    },
    {
      id: 15,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60',
      title: 'Sustainable Style Exhibition',
      category: 'events',
      description: 'Exhibition showcasing sustainable fashion innovations and local designers.',
      tags: ['exhibition', 'innovation', 'design']
    },
    {
      id: 16,
      type: 'video',
      src: '/videos/design-workshop.mp4',
      title: 'Sustainable Design Workshop',
      category: 'workshops',
      description: 'An in-depth workshop on sustainable fashion design principles and eco-friendly pattern making.',
      tags: ['workshop', 'design', 'sustainability', 'education']
    },
    {
      id: 17,
      type: 'video',
      src: '/videos/fashion-show.mp4',
      title: 'Eco Fashion Show 2024',
      category: 'events',
      description: 'Highlights from our annual sustainable fashion show featuring local designers and upcycled collections.',
      tags: ['fashion show', 'event', 'runway', 'sustainable fashion']
    }
  ]

  const categories = ['all', 'events', 'workshops', 'designs']
  
  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
        >
          Our Gallery
        </motion.h1>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
              />
              <FaSearch className="absolute left-3 top-3 text-earth-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === category
                      ? 'bg-earth-600 text-white'
                      : 'bg-earth-100 text-earth-800 hover:bg-earth-200'
                  }`}
                >
                  <FaFilter className="inline-block mr-2" />
                  {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-6 break-inside-avoid"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                      <video
                        className="w-full h-full object-cover"
                        poster={`/video-thumbnails/${item.id}.jpg`}
                        onClick={(e) => {
                          e.preventDefault()
                          setSelectedItem(item)
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <FaPlay className="text-white text-4xl opacity-100 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-medium">View Details</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-earth-100 text-earth-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full p-6"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  {selectedItem.type === 'image' ? (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <div className="relative aspect-video">
                      <video
                        className="w-full h-full rounded-lg"
                        controls
                        autoPlay
                      >
                        <source src={selectedItem.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedItem(null)}
                    className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-earth-100 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6"
                >
                  <h3 className="text-2xl font-serif mb-2">{selectedItem.title}</h3>
                  <p className="text-earth-700 mb-4">{selectedItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-earth-100 text-earth-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery 
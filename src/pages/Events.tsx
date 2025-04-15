import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFilter, FaTicketAlt, FaUsers, FaHeart } from 'react-icons/fa'

type Event = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  type: 'swap' | 'workshop'
  capacity: number
  price: string
  featured?: boolean
}

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'swap' | 'workshop'>('all')
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  // Enhanced events data
  const events: Event[] = [
    {
      id: 1,
      title: 'Sustainable Sundays: Community Swap',
      date: '2024-04-21',
      time: '2:00 PM - 5:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'Join us for our monthly clothing swap event. Bring your gently used items and find new treasures while reducing fashion waste.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60',
      type: 'swap',
      capacity: 30,
      price: 'Free',
      featured: true
    },
    {
      id: 2,
      title: 'Upcycling Workshop: Denim Transformation',
      date: '2024-04-28',
      time: '10:00 AM - 2:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'Learn how to transform old denim into stylish new pieces in this hands-on workshop. All materials provided.',
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&auto=format&fit=crop&q=60',
      type: 'workshop',
      capacity: 15,
      price: 'GH₵200',
      featured: true
    },
    {
      id: 3,
      title: 'Eco-Fashion Photography Workshop',
      date: '2024-05-02',
      time: '1:00 PM - 4:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'Master the art of sustainable fashion photography. Learn styling, lighting, and composition techniques to showcase eco-friendly fashion.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=60',
      type: 'workshop',
      capacity: 20,
      price: 'GH₵180',
      featured: true
    },
    {
      id: 4,
      title: 'Natural Dyeing Masterclass',
      date: '2024-05-12',
      time: '11:00 AM - 3:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'Master the art of natural dyeing using local plants and eco-friendly techniques.',
      image: 'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?w=800&auto=format&fit=crop&q=60',
      type: 'workshop',
      capacity: 12,
      price: 'GH₵250'
    },
    {
      id: 5,
      title: 'Kids Upcycling Workshop',
      date: '2024-05-19',
      time: '10:00 AM - 12:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'A fun workshop for kids aged 8-12 to learn about sustainability through creative upcycling projects.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60',
      type: 'workshop',
      capacity: 15,
      price: 'GH₵150'
    },
    {
      id: 6,
      title: 'Vintage Clothing Exchange',
      date: '2024-05-26',
      time: '1:00 PM - 5:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'A special edition of our swap events focusing on vintage and retro clothing pieces.',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop&q=60',
      type: 'swap',
      capacity: 35,
      price: 'Free'
    }
  ]

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.type === activeFilter)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-earth-50">
      <div className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif mb-6"
            >
              Upcoming Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-earth-700 max-w-2xl mx-auto"
            >
              Join our community events and workshops to learn, share, and contribute to sustainable fashion.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {(['all', 'swap', 'workshop'] as const).map(filter => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full capitalize transition-colors flex items-center gap-2 ${
                  activeFilter === filter
                    ? 'bg-earth-600 text-white'
                    : 'bg-white text-earth-800 hover:bg-earth-100 shadow-md'
                }`}
              >
                <FaFilter className="text-sm" />
                {filter === 'all' ? 'All Events' : filter === 'swap' ? 'Swap Events' : 'Workshops'}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Events */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif mb-6 text-center">Featured Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {events
                .filter(event => event.featured)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu"
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          className="bg-earth-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          Featured
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-4">
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="text-xl font-serif mb-3"
                      >
                        {event.title}
                      </motion.h3>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="space-y-2 mb-4 text-sm"
                      >
                        <div className="flex items-center text-earth-700">
                          <FaCalendarAlt className="mr-2 text-xs" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaClock className="mr-2 text-xs" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaMapMarkerAlt className="mr-2 text-xs" />
                          <span>{event.location}</span>
                        </div>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        className="text-earth-700 mb-4 text-sm line-clamp-2"
                      >
                        {event.description}
                      </motion.p>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        className="flex items-center justify-between mb-4 text-sm"
                      >
                        <div className="flex items-center text-earth-700">
                          <FaUsers className="mr-2 text-xs" />
                          <span>{event.capacity} spots</span>
                        </div>
                        <div className="text-earth-700 font-medium">
                          <FaTicketAlt className="mr-1 inline text-xs" />
                          {event.price}
                        </div>
                      </motion.div>
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-primary w-full flex items-center justify-center gap-2 group py-2 text-sm transition-all duration-300"
                        onClick={() => {
                          alert('RSVP functionality coming soon!')
                        }}
                      >
                        RSVP Now
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >
                          <FaHeart className="text-xs" />
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Regular Events Grid */}
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents
                .filter(event => !event.featured)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative h-40">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-serif text-white">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2 mb-3 text-sm">
                        <div className="flex items-center text-earth-700">
                          <FaCalendarAlt className="mr-2 text-xs" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaClock className="mr-2 text-xs" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <p className="text-earth-700 mb-3 text-sm line-clamp-2">{event.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-earth-700 font-medium">
                          <FaTicketAlt className="mr-1 inline text-xs" />
                          {event.price}
                        </div>
                        <button
                          className="btn btn-primary px-4 py-1.5 text-sm flex items-center gap-1.5 group"
                          onClick={() => {
                            // In a real application, this would open an RSVP form
                            alert('RSVP functionality coming soon!')
                          }}
                        >
                          RSVP
                          <FaHeart className="transform group-hover:scale-110 transition-transform text-xs" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </AnimatePresence>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-earth-700">
                No upcoming events in this category. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events 
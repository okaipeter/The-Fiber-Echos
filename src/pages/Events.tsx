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
      title: 'Sustainable Fashion Meetup',
      date: '2024-05-05',
      time: '3:00 PM - 6:00 PM',
      location: 'The Fiber Echos Studio, Accra',
      description: 'Network with like-minded individuals passionate about sustainable fashion. Share ideas and experiences.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60',
      type: 'swap',
      capacity: 40,
      price: 'Free'
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
            className="mb-16"
          >
            <h2 className="text-2xl font-serif mb-8 text-center">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events
                .filter(event => event.featured)
                .map(event => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-64">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-earth-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-earth-700">
                          <FaCalendarAlt className="mr-2" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaClock className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-earth-700 mb-6">{event.description}</p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-earth-700">
                          <FaUsers className="mr-2" />
                          <span>{event.capacity} spots available</span>
                        </div>
                        <div className="text-earth-700 font-medium">
                          <FaTicketAlt className="mr-2 inline" />
                          {event.price}
                        </div>
                      </div>
                      <button
                        className="btn btn-primary w-full flex items-center justify-center gap-2 group"
                        onClick={() => {
                          // In a real application, this would open an RSVP form
                          alert('RSVP functionality coming soon!')
                        }}
                      >
                        RSVP Now
                        <FaHeart className="transform group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Regular Events Grid */}
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents
                .filter(event => !event.featured)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredEvent(event.id)}
                    onHoverEnd={() => setHoveredEvent(null)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredEvent === event.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                      >
                        <span className="text-white text-lg font-medium">View Details</span>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          event.type === 'swap' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {event.type === 'swap' ? 'Swap Event' : 'Workshop'}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-earth-700">
                          <FaCalendarAlt className="mr-2" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaClock className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-earth-700">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-earth-700">
                          <FaUsers className="mr-2" />
                          <span>{event.capacity} spots</span>
                        </div>
                        <div className="text-earth-700 font-medium">
                          <FaTicketAlt className="mr-2 inline" />
                          {event.price}
                        </div>
                      </div>
                      <button
                        className="btn btn-secondary w-full flex items-center justify-center gap-2 group"
                        onClick={() => {
                          alert('RSVP functionality coming soon!')
                        }}
                      >
                        RSVP Now
                        <FaHeart className="transform group-hover:scale-110 transition-transform" />
                      </button>
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
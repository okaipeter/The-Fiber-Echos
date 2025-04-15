import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCalendarAlt, FaLeaf, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would connect to your newsletter service
    setSubscribeStatus('success')
    setEmail('')
    setTimeout(() => setSubscribeStatus('idle'), 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&auto=format&fit=crop&q=80"
            alt="Sustainable fashion background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Swap. Sustain. Reclaim. Restore.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Join our movement to transform fashion through sustainable practices and community engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/events"
              className="btn btn-primary inline-flex items-center gap-2 group"
            >
              Join Our Next Event
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Sustainable Sundays Section */}
      <section className="section-padding bg-earth-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <FaCalendarAlt className="text-earth-600 text-2xl" />
                <h2 className="text-3xl md:text-4xl font-serif">
                  Sustainable Sundays
                </h2>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg mb-6"
              >
                Join us every Sunday for our community clothing swap events. Bring your gently used items and find new treasures while reducing fashion waste.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/events"
                  className="btn btn-secondary inline-flex items-center gap-2 group"
                >
                  Learn More
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60"
                alt="Sustainable Sundays event"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-earth-600 text-white p-4 rounded-lg shadow-lg"
              >
                <FaLeaf className="text-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="section-padding bg-earth-800 text-earth-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif mb-6"
            >
              "Fashion is not just about looking good; it's about feeling good about the impact we make. Every piece of clothing tells a story, and together, we can write a new chapter of sustainability."
            </motion.blockquote>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              — Lauren Goodwin, Founder
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Art Expression Section */}
      <section className="section-padding bg-earth-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 relative"
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-center">
                The Art of{' '}
                <span className="relative inline-block">
                  Human Expression
                  <motion.img
                    src="/images/statue-icon.png"
                    alt="Statue icon"
                    className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-8 h-auto"
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 10 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </span>
                , Uncover
              </h1>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-center">
                The{' '}
                <span className="italic font-serif">Stories</span>{' '}
                Behind the Art
                <motion.img
                  src="/images/face-sculpture.png"
                  alt="Face sculpture"
                  className="inline-block ml-4 w-12 h-auto align-middle"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center">
                Discover new favorites among our diverse exhibitions, Uncover the
                stories and inspirations behind the art
              </p>
              <div className="flex justify-center">
                <Link to="/art-and-fashion">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-earth-800 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-earth-900 transition-colors duration-300"
                  >
                    Explore
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Image Gallery Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581088584496-44ca2f3e49e8?w=800&auto=format&fit=crop&q=60"
                    alt="Sustainable Fashion Design"
                    className="w-full h-[320px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Sustainable Design</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative group md:mt-8"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&auto=format&fit=crop&q=60"
                    alt="Textile Craftsmanship"
                    className="w-full h-[320px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Textile Craftsmanship</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60"
                    alt="Fashion Art"
                    className="w-full h-[320px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Fashion Art</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-earth-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="md:pl-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif mb-6"
                  >
                    Stay Connected
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-earth-700 mb-8 text-lg"
                  >
                    Subscribe to our newsletter for updates on events, sustainability tips, and community stories.
                  </motion.p>
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-5 py-3.5 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500 transition-all duration-300 text-lg"
                      />
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center gap-3 group py-3.5 text-lg"
                    >
                      Subscribe Now
                      <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform text-lg" />
                    </motion.button>
                  </form>
                  {subscribeStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 mt-6 text-lg"
                    >
                      Thank you for subscribing! 🌿
                    </motion.p>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-[400px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=60"
                    alt="Sustainable fashion newsletter"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 -right-4 bg-earth-600 text-white p-5 rounded-2xl shadow-xl"
                  >
                    <FaLeaf className="text-2xl" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPalette, FaTshirt, FaRecycle, FaHandHoldingHeart } from 'react-icons/fa'

const ArtAndFashion = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=1920&auto=format&fit=crop&q=80"
            alt="Art and Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 container-custom text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Where Art Meets Fashion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Exploring the beautiful intersection of artistic expression and sustainable fashion
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-earth-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Vision</h2>
            <p className="text-xl text-earth-700">
              At Fiber Echos, we believe that fashion is more than just clothing—it's a form of artistic expression that tells stories, preserves culture, and shapes our future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Art Perspective */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaPalette className="text-4xl text-earth-600" />
                <h3 className="text-2xl font-serif">The Art Perspective</h3>
              </div>
              <p className="text-earth-700 mb-6">
                We view each garment as a canvas, each stitch as a brushstroke, and each design as a masterpiece waiting to be discovered. Our artistic approach transforms sustainable fashion into wearable art.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&auto=format&fit=crop&q=60"
                  alt="Artistic Fashion"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Fashion Perspective */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaTshirt className="text-4xl text-earth-600" />
                <h3 className="text-2xl font-serif">The Fashion Perspective</h3>
              </div>
              <p className="text-earth-700 mb-6">
                Fashion is our medium for storytelling, cultural preservation, and sustainable innovation. We blend traditional craftsmanship with modern design to create pieces that transcend trends.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60"
                  alt="Fashion Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-earth-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Impact</h2>
            <p className="text-xl opacity-90">
              Through the fusion of art and fashion, we're creating lasting change in our community and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <FaRecycle className="text-4xl text-earth-300" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Sustainable Innovation</h3>
                <p className="opacity-90">
                  By treating fashion as art, we encourage mindful consumption and creative reuse, reducing waste while elevating everyday clothing to artistic expression.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <FaHandHoldingHeart className="text-4xl text-earth-300" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Community Empowerment</h3>
                <p className="opacity-90">
                  Our workshops and events bring together artists and fashion enthusiasts, creating a space where creativity and sustainability intersect.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-40 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60"
                alt="Fashion Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <h3 className="text-2xl font-serif mb-2">Upcoming Events</h3>
                <p className="text-sm opacity-90">Join us for workshops, exhibitions, and sustainable fashion shows</p>
              </motion.div>
            </motion.div>

            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center sm:text-left"
                >
                  <p className="text-earth-800 font-medium">Next Event Starting In</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="bg-earth-100 px-3 py-2 rounded-lg">
                      <span className="text-xl font-bold text-earth-800">05</span>
                      <span className="text-xs text-earth-600 block">Days</span>
                    </div>
                    <div className="bg-earth-100 px-3 py-2 rounded-lg">
                      <span className="text-xl font-bold text-earth-800">12</span>
                      <span className="text-xs text-earth-600 block">Hours</span>
                    </div>
                    <div className="bg-earth-100 px-3 py-2 rounded-lg">
                      <span className="text-xl font-bold text-earth-800">45</span>
                      <span className="text-xs text-earth-600 block">Minutes</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-earth-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-earth-900 transition-all duration-300 flex items-center gap-2 group"
                    >
                      Join Our Next Event
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ArtAndFashion 
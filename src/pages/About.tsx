import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaUsers, FaHandHoldingHeart, FaGlobe, FaSeedling, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: FaUsers, count: '1000+', label: 'Community Members' },
    { icon: FaRecycle, count: '5000+', label: 'Items Swapped' },
    { icon: FaGlobe, count: '10+', label: 'Local Partners' },
    { icon: FaSeedling, count: '24+', label: 'Monthly Events' },
  ]

  const values = [
    {
      icon: FaLeaf,
      title: 'Sustainability First',
      description: 'We prioritize eco-friendly practices in everything we do, from our events to our daily operations.'
    },
    {
      icon: FaUsers,
      title: 'Community-Driven',
      description: 'Our strength lies in our diverse community of fashion enthusiasts and sustainability advocates.'
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Ethical Impact',
      description: 'We believe in making fashion choices that benefit both people and the planet.'
    }
  ]

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
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
            Our Story
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-earth-400 mx-auto mb-6"
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-earth-700 mb-6"
              >
                The Fiber Echos is a sustainability collective based in Accra, Ghana, dedicated to transforming the fashion industry through conscious consumerism and community engagement.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-earth-700"
              >
                Our mission is to create a circular fashion economy where clothing is valued, reused, and repurposed. We believe that sustainable fashion is not just a trend but a necessary shift in how we consume and appreciate clothing.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&auto=format&fit=crop&q=60"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-earth-600 text-white p-6 rounded-lg shadow-lg"
              >
                <FaLeaf className="text-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-earth-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="text-4xl mb-4 mx-auto text-earth-400" />
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.count}
                </motion.h3>
                <p className="text-earth-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-earth-50 p-8 rounded-xl shadow-lg text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block p-4 bg-earth-600 text-white rounded-full mb-6"
                >
                  <value.icon className="text-2xl" />
                </motion.div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-earth-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-earth-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Meet Our Founder</h2>
            <p className="text-lg text-earth-700">
              The visionary behind The Fiber Echos, leading our mission to transform fashion through sustainability.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60"
                  alt="Lauren Goodwin"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-earth-600 text-white p-6 rounded-lg shadow-lg"
              >
                <FaLeaf className="text-3xl" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif mb-4">Lauren Goodwin</h3>
              <p className="text-earth-700 mb-6">
                With over a decade of experience in sustainable fashion and community organizing, Lauren founded The Fiber Echos in 2020 with a vision to create meaningful change in the fashion industry. Her background in textile design and environmental activism has shaped her approach to sustainable fashion, focusing on both the creative and practical aspects of clothing sustainability.
              </p>
              <p className="text-earth-700 mb-8">
                Lauren's work has been featured in numerous publications, and she regularly speaks at sustainability conferences and events across Africa and beyond. She is passionate about creating a circular fashion economy and empowering communities through sustainable practices.
              </p>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://instagram.com/laurengoodwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-earth-700 hover:text-earth-900 transition-colors"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://facebook.com/laurengoodwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-earth-700 hover:text-earth-900 transition-colors"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://tiktok.com/@laurengoodwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-earth-700 hover:text-earth-900 transition-colors"
                >
                  <FaTiktok />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 
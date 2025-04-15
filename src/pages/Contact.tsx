import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-earth-100 rounded-lg p-8">
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-earth-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-earth-700">
                      The Fiber Echos Studio<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-earth-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:info@fiberechos.com"
                      className="text-earth-700 hover:text-earth-900 transition-colors"
                    >
                      info@fiberechos.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-earth-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+233123456789"
                      className="text-earth-700 hover:text-earth-900 transition-colors"
                    >
                      +233 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/fiberechos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-700 hover:text-earth-900 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/fiberechos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-700 hover:text-earth-900 transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://twitter.com/fiberechos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-700 hover:text-earth-900 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center"
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact 
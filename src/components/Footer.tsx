import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-earth-800 text-earth-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif mb-4">The Fiber Echos</h3>
            <p className="text-earth-200">
              A sustainability collective dedicated to eco-conscious fashion and community building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-earth-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-earth-200 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/blog" className="text-earth-200 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-earth-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-earth-300" />
                <a href="mailto:info@fiberechos.com" className="text-earth-200 hover:text-white transition-colors">
                  info@fiberechos.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-earth-300" />
                <span className="text-earth-200">Accra, Ghana</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-serif mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/fiberechos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-200 hover:text-white transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com/fiberechos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-200 hover:text-white transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com/fiberechos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-200 hover:text-white transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-earth-700 text-center text-earth-300">
          <p>&copy; {new Date().getFullYear()} The Fiber Echos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
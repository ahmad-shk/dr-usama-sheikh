import { Facebook, Twitter, Youtube, Phone, Mail, MapPin, ArrowUp, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-950 text-white pt-16 pb-8 mt-16 shadow-inner-xl relative overflow-hidden">
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 relative z-10">
        {/* About */}
        <div className="flex flex-col items-start">
          <h3 className="font-extrabold text-2xl mb-6 text-blue-100 border-b-2 border-blue-600 pb-2 w-full">
            About Clinic
          </h3>
          <p className="text-sm text-blue-200 leading-relaxed mb-6">
            We provide professional care for your health, focusing on both mental and physical well-being. Our team is
            dedicated to your holistic health.
          </p>
          <div className="flex space-x-4 mt-auto">
            <a
              href="https://www.facebook.com/yourclinic" // Placeholder Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#1877F2] text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/yourclinic" // Placeholder Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-[#1DA1F2] text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/yourclinic" // Placeholder Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-[#E4405F] text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/yourclinic" // Placeholder YouTube URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-[#FF0000] text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/929907705550" // Placeholder WhatsApp URL (using the same number as contact)
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-[#25D366] text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Phone className="w-5 h-5" /> {/* Changed to Phone icon for WhatsApp */}
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="font-extrabold text-2xl mb-6 text-blue-100 border-b-2 border-blue-600 pb-2 w-full">
            Quick Links
          </h3>
          <ul className="space-y-3 text-blue-200">
            <li>
              <a
                href="#heroBanner"
                className="hover:text-blue-50 transition-colors duration-200 flex items-center group"
              >
                <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                  &rsaquo;
                </span>{" "}
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-50 transition-colors duration-200 flex items-center group">
                <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                  &rsaquo;
                </span>{" "}
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-50 transition-colors duration-200 flex items-center group">
                <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                  &rsaquo;
                </span>{" "}
                Services
              </a>
            </li>
            <li>
              <a
                href="#appointment"
                className="hover:text-blue-50 transition-colors duration-200 flex items-center group"
              >
                <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                  &rsaquo;
                </span>{" "}
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="font-extrabold text-2xl mb-6 text-blue-100 border-b-2 border-blue-600 pb-2 w-full">Contact</h3>
          <ul className="space-y-3 text-sm text-blue-200">
            <li>
              <a
                href="https://wa.me/923173070894"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-50 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3 text-blue-400" /> +92 317 3070894
               </a>
            </li>
            <li>
              <a
                href="mailto:info@Usama Sheikhclinic.com"
                className="flex items-center hover:text-blue-50 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3 text-blue-400" /> info@Usama Sheikhclinic.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/123+Main+Street,+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-50 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mr-3 text-blue-400" /> 123 Main Street, Lahore
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start">
          <h3 className="font-extrabold text-2xl mb-6 text-blue-100 border-b-2 border-blue-600 pb-2 w-full">
            Newsletter
          </h3>
          <p className="text-sm text-blue-200 leading-relaxed mb-4">Subscribe for health tips and updates.</p>
          <form className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-lg px-4 py-3 text-gray-800 bg-blue-100/90 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 w-full transition-all duration-200 placeholder-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright and Scroll-to-Top */}
      <div className="bg-blue-900/50 border-t border-blue-700 mt-12 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 rounded-t-xl">
        <span className="text-sm text-blue-200 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Dr. Usama Sheikh — All Rights Reserved
        </span>
        <a
          href="#top"
          aria-label="Scroll to top"
          className="bg-blue-700 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

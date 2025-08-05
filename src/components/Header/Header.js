"use client"

import { useState, useEffect, useRef } from "react" // Import useEffect and useRef
import { Menu, CalendarPlus } from "lucide-react"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // State to control header visibility
  const lastScrollY = useRef(0) // Ref to store the last scroll position

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show header at the very top
      if (currentScrollY === 0) {
        setIsVisible(true)
      }
      // Hide on scroll up (if not at top)
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Hide if scrolling down and not near top
        setIsVisible(false)
        setIsNavOpen(false) // Close mobile nav if header hides
      }
      // Show on scroll down
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY // Update last scroll position
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-br from-blue-950 to-blue-600 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Dynamic background overlay for subtle movement/texture */}
      <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow"></div>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-b-xl">
        <a className="flex items-center space-x-3 group" href="/">
          <img
            src="images/logo.png"
            alt="Usama Sheikh Clinic Logo"
            className="h-10 w-10 rounded-full shadow-xl border-2 border-blue-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-200/70"
          />
          <span className="font-extrabold text-2xl text-white tracking-wide drop-shadow-lg transition-colors duration-300 group-hover:text-blue-100">
            DR Usama Sheikh
          </span>
        </a>
        <button
          className="md:hidden text-white hover:text-blue-200 focus:outline-none transition-transform duration-300 active:scale-95"
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <Menu className="h-7 w-7" />
        </button>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${isNavOpen ? "block" : "hidden"} md:static absolute top-full left-0 bg-blue-900/90 md:bg-transparent shadow-xl md:shadow-none rounded-b-xl md:rounded-none transition-all duration-300 ease-in-out ${isNavOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0"}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 mt-4 md:mt-0 px-6 md:px-0 py-4 md:py-0 items-center">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li key={item} className="group relative">
                <a
                  className="relative text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:text-blue-100 block overflow-hidden hover:bg-white/10 transform hover:scale-105 hover:shadow-md"
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                >
                  {item}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  {/* Subtle text shadow on hover */}
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                  >
                    {item}
                  </span>
                </a>
              </li>
            ))}
            <li className="mt-6 md:mt-0 md:ml-8">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <CalendarPlus className="w-5 h-5 mr-2" />
                Book Appointment
                {/* Subtle glow effect on hover */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full animate-pulse-fast"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

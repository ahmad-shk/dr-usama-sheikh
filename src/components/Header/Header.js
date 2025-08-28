"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, CalendarPlus } from "lucide-react"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { i18n, t } = useTranslation()
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || i18n.language || 'en';
    }
    return i18n.language || 'en';
  });

  // Sync lang state with i18n.language so UI always updates
  useEffect(() => {
    const handleLangChange = (lng) => setLang(lng);
    i18n.on('languageChanged', handleLangChange);
    setLang(i18n.language);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);
  const [dropdownOpen, setDropdownOpen] = useState(false)
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
        {/* Language Switcher */}
        <div className="ml-4 relative group">
          <div className="relative">
            <button
              className="flex items-center bg-white/90 rounded-xl shadow-lg border border-blue-200 px-3 py-1.5 font-semibold text-blue-900 transition-all duration-200 focus:ring-2 focus:ring-blue-400 hover:bg-blue-50/90 min-w-[110px] gap-2 custom-dropdown-btn"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              tabIndex={0}
              onClick={() => setDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 120)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3zm0 0c2.21 0 4 4.477 4 10s-1.79 10-4 10-4-4.477-4-10 1.79-10 4-10z" /></svg>
              <span>{t('language_name')}</span>
              <svg className={`w-4 h-4 text-blue-700 ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <ul
                className="absolute left-0 mt-1 w-full bg-white rounded-xl shadow-xl border border-blue-200 z-20 animate-fade-in custom-dropdown-list"
                tabIndex={-1}
                role="listbox"
              >
                <li
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-900 rounded-t-xl ${lang === 'en' ? 'font-bold bg-blue-50' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('en');
                    localStorage.setItem('lang', 'en');
                    setDropdownOpen(false);
                  }}
                  role="option"
                  aria-selected={lang === 'en'}
                >{t('language_name', { lng: 'en' })}</li>
                <li
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-900 rounded-b-xl ${lang === 'ur' ? 'font-bold bg-blue-50' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('ur');
                    localStorage.setItem('lang', 'ur');
                    setDropdownOpen(false);
                  }}
                  role="option"
                  aria-selected={lang === 'ur'}
                >{t('language_name', { lng: 'ur' })}</li>
              </ul>
            )}
          </div>
          <style>{`
            .custom-dropdown-list.animate-fade-in {
              animation: fadeIn 0.18s ease;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-8px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
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
            {[
              { key: "home", href: "#home" },
              { key: "about", href: "#about" },
              { key: "services", href: "#services" },
              { key: "contact", href: "#contact" },
            ].map((item) => (
              <li key={item.key} className="group relative">
                <a
                  className="relative text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:text-blue-100 block overflow-hidden hover:bg-white/10 transform hover:scale-105 hover:shadow-md"
                  href={item.href}
                >
                  {/* Use translation key */}
                  {t(item.key)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                  >
                    {t(item.key)}
                  </span>
                </a>
              </li>
            ))}
            <li className="mt-6 md:mt-0 md:ml-8">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-7 py-3 border-2 border-blue-300 text-base font-bold rounded-full text-white bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden backdrop-blur-md glassmorphism-btn"
                style={{ position: 'relative', zIndex: 1 }}
              >
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 opacity-40 blur-lg animate-glow z-0"></span>
                <CalendarPlus className="w-5 h-5 mr-2 z-10" />
                <span className="z-10">{t("appointment")}</span>
              </a>
              <style>{`
                .glassmorphism-btn {
                  background: rgba(30, 58, 138, 0.7);
                  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
                  border: 1.5px solid rgba(59,130,246,0.25);
                  backdrop-filter: blur(6px);
                }
                .animate-glow {
                  animation: glowPulse 2.2s infinite alternate;
                }
                @keyframes glowPulse {
                  0% { opacity: 0.25; }
                  100% { opacity: 0.55; }
                }
              `}</style>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

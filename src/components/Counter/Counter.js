"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Scissors, Award, MapPin } from "lucide-react"

const counters = [
  {
    value: 10000,
    suffix: "+",
    label: "Happy Patients",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    delay: 0,
  },
  {
    value: 100,
    suffix: "+",
    label: "Surgeries Completed",
    icon: Scissors,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    delay: 200,
  },
  {
    value: 4,
    suffix: "",
    label: "Awards Won",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    delay: 400,
  },
  {
    value: 2,
    suffix: "",
    label: "Global Branches",
    icon: MapPin,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    delay: 600,
  },
]

const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return (
    <div ref={counterRef} className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const Counter = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Our Impact in Numbers</h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            Trusted by thousands, delivering excellence in healthcare
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 lg:gap-3">
          {counters.map((counter, index) => {
            const IconComponent = counter.icon
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${counter.delay}ms`,
                }}
              >
                {/* Card */}
                <div className="bg-white/20 rounded-2xl p-4 text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-[90px] sm:h-[100px] lg:h-[110px] flex flex-col justify-between">
                  {/* Main content container for left/right alignment */}
                  <div className="flex items-center justify-between flex-grow px-1">
                    {/* Left side: Icon and Label (stacked) */}
                    <div className="flex flex-col items-start text-left">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${counter.color} shadow-lg transform transition-all duration-300 group-hover:scale-110 mb-1`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      {/* Removed Glow effect for icon:
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${counter.color} opacity-20 blur-xl transform scale-150 transition-opacity duration-300`}
                      ></div>
                      */}
                      <div className="text-blue-100 text-xs sm:text-sm font-medium leading-tight min-h-[1.5rem] flex items-center justify-start text-left">
                        {counter.label}
                      </div>
                    </div>

                    {/* Right side: Counter Value */}
                    <div className="text-white font-extrabold tracking-tight text-right">
                      <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                {/* Background decoration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Counter

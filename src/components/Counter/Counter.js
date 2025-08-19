

"use client";
import { useEffect, useState, useRef } from "react";
import { Users, Scissors, Award, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

// AnimatedCounter component for animated number effect
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 10;
    let current = start;
    const step = () => {
      current += Math.ceil(end / 100);
      if (current > end) current = end;
      setCount(current);
      if (current < end) {
        ref.current = setTimeout(step, incrementTime);
      }
    };
    step();
    return () => clearTimeout(ref.current);
  }, [value]);
  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const counters = [
  {
    value: 10000,
    suffix: "+",
    labelKey: "counter_happy_patients",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    delay: 0,
  },
  {
    value: 100,
    suffix: "+",
    labelKey: "counter_surgeries_completed",
    icon: Scissors,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    delay: 200,
  },
  {
    value: 4,
    suffix: "",
    labelKey: "counter_awards_won",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    delay: 400,
  },
  {
    value: 2,
    suffix: "",
    labelKey: "counter_global_branches",
    icon: MapPin,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    delay: 600,
  },
];


const Counter = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">{t('counter_impact_title')}</h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            {t('counter_impact_desc')}
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 lg:gap-3">
          {counters.map((counter, index) => {
            const IconComponent = counter.icon;
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
                      <div className="text-blue-100 text-xs sm:text-sm font-medium leading-tight min-h-[1.5rem] flex items-center justify-start text-left">
                        {t(counter.labelKey)}
                      </div>
                    </div>

                    {/* Right side: Counter Value */}
                    <div className="text-white font-extrabold tracking-tight text-right">
                      {/* You may want to use an animated counter here if you have one */}
                      {counter.value}{counter.suffix}
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                {/* Background decoration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;



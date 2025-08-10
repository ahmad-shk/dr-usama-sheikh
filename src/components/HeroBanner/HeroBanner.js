import { ArrowRight } from "lucide-react" // Import ArrowRight icon

const HeroBanner = () => (
  <section
    className="relative mt-20 bg-white min-h-[650px] md:min-h-[700px] flex items-center overflow-hidden"
    id="home"
  >
    {/* Background Image (Hallway) */}
    <div
      className="absolute inset-0 bg-cover bg-center -opacity-70"
      style={{ backgroundImage: 'url("/images/bg/slider-bg-1.jpg")' }}
    ></div>

    {/* Doctor Image */}
    <div
      className="absolute right-0 bottom-0 h-full w-full lg:w-1/2 bg-contain bg-no-repeat bg-right-bottom"
      style={{ backgroundImage: 'url("/images/doctor-hero.png")' }}
      aria-hidden="true" // Decorative image
    ></div>

    <div className="max-w-6xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center relative z-10">
      {/* Left Content */}
      <div className="w-full lg:w-7/12 py-16 text-center lg:text-left">
        <div className="w-10 h-1 bg-blue-500 rounded mb-4 mx-auto lg:mx-0"></div>
        <span className="uppercase text-sm tracking-widest text-gray-600 font-semibold mb-2 block">
          Professional Care For Your Health
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
          Good Health Moves Us Forward
        </h1>
        <p className="mb-6 text-gray-600 text-base max-w-lg mx-auto lg:mx-0">
          Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your
          holistic well-being, nurturing both your mental and physical health with meticulous care.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition duration-200 shadow-lg text-sm uppercase tracking-wide group"
        >
          MAKE APPOINTMENT
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
      {/* Right Image (now handled by background-image on a div) */}
      <div className="w-full lg:w-5/12 flex justify-center items-center lg:hidden">
        {/* This div is for smaller screens where the doctor image might need a different treatment or be hidden */}
      </div>
    </div>
  </section>
)

export default HeroBanner

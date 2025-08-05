import React from 'react'

const About = () => (
  <section className="py-16 bg-white" id="about">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Dr. Usama Sheikh</h2>
        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <p>
             DR Usama Sheikh Sanchez is a highly skilled and compassionate physician with over 15 years of experience in internal medicine. She obtained her medical degree from Harvard Medical School, where she graduated with honors, showcasing her dedication to academic excellence.
          </p>
          <p>
            Dr. Sanchez completed her residency training at Massachusetts General Hospital, one of the nation's top-ranked hospitals, where she honed her clinical expertise and developed a deep understanding of complex medical conditions.
          </p>
          <p>
            Known for her warm bedside manner and empathetic approach, Dr. Sanchez takes the time to listen to her patients' concerns and collaborates with them to develop personalized treatment plans. She believes in the importance of holistic care, addressing not only the physical aspects of illness but also the emotional and psychological well-being of her patients.
          </p>
          <p>
            In her spare time, Dr. Sanchez enjoys hiking in the great outdoors and spending quality time with her family. She brings a genuine passion for healing and a deep sense of compassion to her practice, earning the trust and admiration of her patients and colleagues alike.
          </p>
        </div>
      </div>
      {/* Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="images/about/profile-1.jpg"
          alt="Dr. Usama Sheikh holding globe"
          className="rounded-xl w-full max-w-md object-cover"
        />
      </div>
    </div>
  </section>
)

export default About
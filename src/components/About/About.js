import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('aboutDrUsama')}</h2>
          <div className="space-y-5 text-gray-700 text-base leading-relaxed">
            <p>{t('aboutPara1')}</p>
            <p>{t('aboutPara2')}</p>
            <p>{t('aboutPara3')}</p>
            <p>{t('aboutPara4')}</p>
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
}


export default About
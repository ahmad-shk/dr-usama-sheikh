import { Stethoscope, Heart, Activity, Pill, TestTube, Apple } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()
  const services = [
    {
      icon: Stethoscope,
      title: t('service_physical_title'),
      description: t('service_physical_desc'),
      color: "bg-blue-50 text-blue-600 border-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: Heart,
      title: t('service_care_title'),
      description: t('service_care_desc'),
      color: "bg-red-50 text-red-600 border-red-100",
      hoverColor: "hover:bg-red-100",
    },
    {
      icon: Activity,
      title: t('service_disease_title'),
      description: t('service_disease_desc'),
      color: "bg-green-50 text-green-600 border-green-100",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: Pill,
      title: t('service_medication_title'),
      description: t('service_medication_desc'),
      color: "bg-purple-50 text-purple-600 border-purple-100",
      hoverColor: "hover:bg-purple-100",
    },
    {
      icon: TestTube,
      title: t('service_diagnostic_title'),
      description: t('service_diagnostic_desc'),
      color: "bg-orange-50 text-orange-600 border-orange-100",
      hoverColor: "hover:bg-orange-100",
    },
    {
      icon: Apple,
      title: t('service_nutrition_title'),
      description: t('service_nutrition_desc'),
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      hoverColor: "hover:bg-emerald-100",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">{t('ourServices')}</h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('comprehensiveHealthcare')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group-hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8 text-center relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                      <IconComponent className="w-full h-full" />
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-6 transition-all duration-300 ${service.color} ${service.hoverColor} group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:rotate-12" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

"use client"

import { Calendar, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog" // Import Dialog components
import ScheduleCalendar from "../Schedule-Calendar/schedule-calendar" // Import the new calendar component

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-transparent mt-[-150px] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Online Appointment Card */}
          <div className="group transform transition-all duration-300 hover:scale-105">
            <Card className="text-center p-6 shadow-xl border-0 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-[420px] flex flex-col">
              <CardContent className="pt-6 relative flex flex-col flex-grow justify-between">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Online Appointment
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Secure appointments the principle of online medicine and online continuous care and support for you
                  and your loved ones.
                </p>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105"
                  href="#appoinment"
                >
                  MAKE APPOINTMENT
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Working Hours Card */}
          <div className="group transform transition-all duration-300 hover:scale-105">
            <Card className="text-center p-6 shadow-xl border-0 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-[420px] flex flex-col">
              <CardContent className="pt-6 relative flex flex-col flex-grow justify-between">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Working Hours
                </h3>
                <div className="text-gray-700 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between font-medium">
                    <span>SUN - WED</span>
                    <span>7:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>THU - FRI</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>SAT - SUN</span>
                    <span>8:00 - 16:00</span>
                  </div>
                </div>
                {/* Dialog for Schedule Calendar */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105">
                      VIEW SCHEDULE
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-5xl p-6 overflow-y-auto max-h-[90vh]">
                    <DialogHeader className="p-4 border-b">
                      <DialogTitle>Clinic Schedule</DialogTitle>
                    </DialogHeader>
                    <ScheduleCalendar />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
          {/* Emergency Contact Card */}
          <div className="group transform transition-all duration-300 hover:scale-105">
            <Card className="text-center p-6 shadow-xl border-0 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-[420px] flex flex-col">
              <CardContent className="pt-6 relative flex flex-col flex-grow justify-between">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  +92 317 3070894
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Experience all-time support for you. Contact the difference for physical or family medicine, answering
                  confidential calls. Connect with us for any urgent needs.
                </p>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105"
                  href="https://wa.me/923173070894"
                >
                  CALL NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

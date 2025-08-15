"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { getDay, isSameDay } from "date-fns";
import "react-day-picker/dist/style.css";

// Fixed-date holidays for 2022–2026
const manualHolidays = [
  "2022-03-23", "2023-03-23", "2024-03-23", "2025-03-23", "2026-03-23", // Pakistan Day
  "2022-05-01", "2023-05-01", "2024-05-01", "2025-05-01", "2026-05-01", // Labour Day
  "2022-08-14", "2023-08-14", "2024-08-14", "2025-08-14", "2026-08-14", // Independence Day
  "2022-12-25", "2023-12-25", "2024-12-25", "2025-12-25", "2026-12-25", // Quaid-e-Azam Day
].map(dateStr => new Date(dateStr));

export default function ScheduleCalendar() {
  const [month, setMonth] = useState(new Date());

  const isHoliday = (date) =>
    manualHolidays.some((holiday) => isSameDay(holiday, date));

  const getDayModifier = (date) => {
    const day = getDay(date);
    if (isHoliday(date)) return "holiday";
    if (day === 1 || day === 2) return "weekend";
    return "working-day";
  };

  const modifiers = {
    holiday: isHoliday,
    "working-day": (date) => getDayModifier(date) === "working-day",
    weekend: (date) => getDayModifier(date) === "weekend",
  };

  const modifiersClassNames = {
    holiday: "rdp-day_holiday",
    "working-day": "rdp-day_working-day",
    weekend: "rdp-day_weekend",
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row flex-wrap gap-8 items-start justify-center">
        
        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1 min-w-[300px] max-w-[450px]">
          <DayPicker
            mode="single"
            month={month}
            onMonthChange={setMonth}
            showOutsideDays
            captionLayout="dropdown"
            fromYear={2022}
            toYear={2026}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
            className="rdp-custom-styles w-full"
          />

          {/* Legend */}
          <div className="mt-6 space-y-2">
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span> Holiday
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span> Working Day
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-3 h-3 rounded-full bg-gray-500 inline-block"></span> Weekend (OFF)
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 min-w-[300px] max-w-[450px]">
          <h4 className="font-semibold mb-4 text-lg text-gray-800">Clinic Hours</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><span className="font-medium">MON:</span> Closed (Please contact the number below)</li>
            <li><span className="font-medium">TUE:</span> Closed (Please contact the number below)</li>
            <li><span className="font-medium">WED:</span> 7:00 - 18:00 (Please contact the number below)</li>
            <li><span className="font-medium">THU:</span> 8:00 - 16:00 (Please contact the number below)</li>
            <li><span className="font-medium">FRI:</span> 8:00 - 16:00 (Please contact the number below)</li>
            <li><span className="font-medium">SAT:</span> 8:00 - 16:00 (Please contact the number below)</li>
            <li><span className="font-medium">SUN:</span> 7:00 - 18:00 (Please contact the number below)</li>
          </ul>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923173070894"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            Contact on WhatsApp
          </a>

          <p className="mt-3 text-xs text-gray-500">
            Note: Holidays and off-days may affect regular working hours. Please confirm before visiting.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .rdp-day_holiday {
          background-color: #dc2626 !important;
          color: white !important;
          border-radius: 9999px;
        }
        .rdp-day_working-day {
          background-color: #2563eb1a;
        }
        .rdp-day_weekend {
          background-color: #6b72801a;
        }
      `}</style>
    </section>
  );
}

import axios from "axios";
import { Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const Appoinment = () => {
  const [formData, setFormData] = useState({
    clinic: "",
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/submit", formData); // ✅ JSON bhej raha hai

    if (response.data.result === "Success") {
      alert("Form submitted successfully!");
      setFormData({
        clinic: "",
        service: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form.");
  }
};




  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative">
          <div className="w-full max-w-md relative">
            <img
              src="/images/about/profile-1.jpg"
              alt="Doctor"
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[80%] bg-blue-600 rounded-lg shadow-xl flex items-center justify-center py-6 px-4">
              <a
                href="https://wa.me/923173070894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl font-bold flex items-center gap-3 hover:text-blue-100 transition-colors duration-200"
              >
                <Phone className="text-3xl" />
                +92 317 3070894
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-700 mb-2">Book appointment</h2>
          <p className="text-gray-600 mb-6">
            The process of booking an appointment is simple. Just fill out the form below, and we'll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700"
              >
                <option value="">Choose Clinic</option>
                <option value="Usama Sheikh">Usama Sheikh Clinic</option>
                <option value="usama">Usama Clinic</option>
              </select>
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700"
              >
                <option value="">Select Services</option>
                <option value="checkup">General Checkup</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none placeholder-gray-500 text-gray-700"
              />
            </div>
            <div>
              <input
                type="text"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none placeholder-gray-500 text-gray-700"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none placeholder-gray-500 text-gray-700"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none placeholder-gray-500 text-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none placeholder-gray-500 text-gray-700 resize-y"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-start mt-2">
              <button
                type="submit"
                // disabled={true} // Disabled button for now
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition flex items-center gap-2 shadow-lg"
              >
                MAKE APPOINTMENT <ArrowRight className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;

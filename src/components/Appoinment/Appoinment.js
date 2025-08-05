import { Phone, ArrowRight } from "lucide-react" // Import Phone and ArrowRight icons

const Appoinment = () => {
  return (
    <section className="py-16 bg-white" id="appoinment">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image & Emergency Box */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative">
          <div className="w-full max-w-md relative">
            {" "}
            {/* Added relative to this div for absolute positioning of the phone box */}
            <img
              src="/images/about/profile-1.jpg" // Use the file path
              alt="Doctor holding globe"
              className="rounded-xl w-full object-cover shadow-lg" // Added shadow for depth
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[80%] bg-blue-600 rounded-lg shadow-xl flex items-center justify-center py-6 px-4">
              {" "}
              {/* Increased shadow */}
              <a
                href="https://wa.me/923173070894"
                className="text-white text-2xl font-bold flex items-center gap-3 hover:text-blue-100 transition-colors duration-200"
              >
                <Phone className="text-3xl" /> {/* Replaced icofont with Lucide icon */}
                +92 317 3070894
              </a>
            </div>
          </div>  
        </div>
        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-700 mb-2">Book appointment</h2>{" "}
          {/* Adjusted text color to match image */}
          <p className="text-gray-600 mb-6">
            The process of booking an appointment is simple. Just fill out the form below, and we'll get back to you
            shortly.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 text-gray-700">
                {" "}
                {/* Added text-gray-700 for default text color */}
                <option value="">Choose Clinic</option>
                <option value="Usama Sheikh">Usama Sheikh Clinic</option>
                <option value="usama">Usama Clinic</option>
              </select>
            </div>
            <div>
              <select className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 text-gray-700">
                <option value="">Select Services</option>
                <option value="checkup">General Checkup</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700" // Added placeholder and text color
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Time"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700 resize-y" // Added resize-y for vertical resizing
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-start mt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition flex items-center gap-2 shadow-lg" // Added shadow
              >
                MAKE APPOINTMENT <ArrowRight className="text-lg" /> {/* Replaced icofont with Lucide icon */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appoinment

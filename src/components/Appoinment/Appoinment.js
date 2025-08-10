import axios from "axios";
import { Phone, ArrowRight } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Appoinment = () => {
  const initialValues = {
    clinic: "",
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: ""
  };

  const validationSchema = Yup.object({
    clinic: Yup.string().required("Clinic select karna zaroori hai"),
    service: Yup.string().required("Service select karna zaroori hai"),
    date: Yup.string().required("Date select karna zaroori hai"),
    time: Yup.string().required("Time select karna zaroori hai"),
    name: Yup.string().required("Naam likhna zaroori hai"),
    phone: Yup.string()
      .required("Phone number zaroori hai")
      .matches(/^(\+92|0)3[0-9]{9}$/, "Valid Pakistani phone number likhen"),
    message: Yup.string()
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/appointmentRoutes`,
        values
      );

      if (response.data?.success || response.status === 201) {
        alert("✅ Appointment successfully booked!");
        resetForm();
      } else {
        alert("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Form bhejnay mein error:", error);
      alert("⚠️ Form send nahi ho saka.");
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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Clinic */}
                <div>
                  <Field as="select" name="clinic" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700">
                    <option value="">Choose Clinic</option>
                    <option value="Usama Sheikh">Usama Sheikh Clinic</option>
                    <option value="usama">Usama Clinic</option>
                  </Field>
                  <ErrorMessage name="clinic" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Service */}
                <div>
                  <Field as="select" name="service" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700">
                    <option value="">Select Services</option>
                    <option value="checkup">General Checkup</option>
                    <option value="consultation">Consultation</option>
                  </Field>
                  <ErrorMessage name="service" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Date */}
                <div>
                  <Field type="date" name="date" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700" />
                  <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Time */}
                <div>
                  <Field type="time" name="time" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700" />
                  <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Name */}
                <div>
                  <Field type="text" name="name" placeholder="Full Name" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Phone */}
                <div>
                  <Field type="text" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <Field as="textarea" name="message" rows="4" placeholder="Your Message" className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700 resize-y" />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-start mt-2">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition flex items-center gap-2 shadow-lg">
                    MAKE APPOINTMENT <ArrowRight className="text-lg" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;

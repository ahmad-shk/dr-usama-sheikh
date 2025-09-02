import axios from "axios";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const PatientQuery = () => {
  const [waClicked, setWaClicked] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();
  const initialValues = {
    name: "",
    phone: "",
    department: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Naam likhna zaroori hai"),
    phone: Yup.string()
      .required("Phone number zaroori hai")
      .matches(/^(\+92|0)3[0-9]{9}$/, "Valid Pakistani phone number likhen"),
    department: Yup.string().required("Department select karna zaroori hai"),
    message: Yup.string().required("Apni query likhna zaroori hai")
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/queries`,
        values
      );

      if (response.data?.success || response.status === 200) {
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        toast({
          title: t('querySentTitle') !== 'querySentTitle' ? t('querySentTitle') : "Query Sent!",
          description: t('querySentDesc') !== 'querySentDesc' ? t('querySentDesc') : "Aapki query hamari medical team ko mil gayi hai. Bohat jald hamara representative aap se rabta karega.",
          variant: "success"
        });
        resetForm();
      } else {
        toast({
          title: t('queryFailedTitle') !== 'queryFailedTitle' ? t('queryFailedTitle') : "Query Send Failed",
          description: t('queryFailedDesc') !== 'queryFailedDesc' ? t('queryFailedDesc') : "Query send nahi ho saki. Dobara try karein.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Query bhejnay mein error:", error);
      toast({
        title: t('queryFailedTitle') !== 'queryFailedTitle' ? t('queryFailedTitle') : "Query Send Failed",
        description: t('queryFailedDesc') !== 'queryFailedDesc' ? t('queryFailedDesc') : "Query send nahi ho saka.",
        variant: "destructive"
      });
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
                onClick={() => {
                  if (!waClicked && window.fbq) {
                    window.fbq('track', 'Lead');
                    setWaClicked(true);
                  }
                }}
              >
                <Phone className="text-3xl" />
                +92 317 3070894
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-700 mb-2">{t('sendQuery')}</h2>
          <p className="text-gray-600 mb-6">{t('fillDetails')}</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Department */}
                <div>
                  <Field
                    as="select"
                    name="department"
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700"
                  >
                    <option value="">Select Department</option>
                    <option value="general-surgeon">General Surgeon</option>
                    <option value="general-checkup">General Checkup</option>
                    <option value="orthopedic">Orthopedic</option>
                  </Field>
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Write your query..."
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded focus:outline-none text-gray-700 resize-y"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-start mt-2">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition flex items-center gap-2 shadow-lg"
                  >
                    SEND QUERY <ArrowRight className="text-lg" />
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

export default PatientQuery;

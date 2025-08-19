"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, RotateCcw, Send, Stethoscope } from "lucide-react"

const MedicalChatStandalone = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState(null)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [chatStep, setChatStep] = useState("waiting")
  const [hasUsedBuiltInQuestions, setHasUsedBuiltInQuestions] = useState(false)
  const [phoneAttempts, setPhoneAttempts] = useState(0)
  const messagesEndRef = useRef(null)

  const medicalData = {
    english: {
      questions: [
        "What are the symptoms of appendicitis?",
        "How to prepare for surgery?",
        "What is arthroscopic surgery?",
        "Recovery time after knee replacement?",
      ],
      answers: {
        "What are the symptoms of appendicitis?":
          "Appendicitis symptoms include severe abdominal pain starting near the navel and moving to the lower right abdomen, nausea, vomiting, loss of appetite, low-grade fever, and tenderness when touching the area.",
        "How to prepare for surgery?":
          "Surgery preparation includes: fasting 8-12 hours before surgery, stopping certain medications as advised, arranging transportation, and following pre-operative instructions from your surgeon.",
        "What is arthroscopic surgery?":
          "Arthroscopic surgery is a minimally invasive procedure using a small camera (arthroscope) inserted through tiny incisions to diagnose and treat joint problems, particularly in knees, shoulders, and hips.",
        "Recovery time after knee replacement?":
          "Knee replacement recovery typically takes 3-6 months. Most patients can walk with assistance within 24-48 hours, return to normal activities in 6-8 weeks, and achieve full recovery in 3-6 months with proper rehabilitation.",
      },
      online: "Online • Ready to help",
      welcome: "Hello! I'm your medical assistant. How can I help you today?",
      commonQuestions: "Common Questions:",
      typeMessage: "Or type your own message below:",
      placeholder: "Type your message...",
      teamOffline: "Our team is not online right now. Our team will contact you very soon. Please provide your name:",
      askPhone: "Thank you! Please provide your phone number:",
      invalidPhone:
        "Please enter a valid Pakistani phone number (e.g., 03XXXXXXXXX or +92-3XX-XXXXXXX). Attempts remaining:",
      teamContact: "Thank you! Our medical team will contact you shortly at the provided number.",
      reset: "Reset",
    },
    urdu: {
      questions: [
        "اپینڈکس کی علامات کیا ہیں؟",
        "سرجری کی تیاری کیسے کریں؟",
        "آرتھروسکوپک سرجری کیا ہے؟",
        "گھٹنے کی تبدیلی کے بعد صحت یابی کا وقت؟",
      ],
      answers: {
        "اپینڈکس کی علامات کیا ہیں؟":
          "اپینڈکس کی علامات میں شامل ہے: ناف کے پاس شدید پیٹ درد جو دائیں طرف نیچے منتقل ہوتا ہے، متلی، قے، بھوک کی کمی، ہلکا بخار، اور چھونے پر درد۔",
        "سرجری کی تیاری کیسے کریں؟":
          "سرجری کی تیاری میں شامل ہے: سرجری سے 8-12 گھنٹے پہلے کھانا پینا بند کرنا، ڈاکٹر کے مشورے کے مطابق دوائیں بند کرنا، اور سرجن کی ہدایات کا پیروی کرنا۔",
        "آرتھروسکوپک سرجری کیا ہے؟":
          "آرتھروسکوپک سرجری ایک کم تکلیف دہ طریقہ کار ہے جس میں چھوٹے کیمرے کا استعمال کرتے ہوئے جوڑوں کے مسائل کی تشخیص اور علاج کیا جاتا ہے۔",
        "گھٹنے کی تبدیلی کے بعد صحت یابی کا وقت؟":
          "گھٹنے کی تبدیلی کے بعد صحت یابی عام طور پر 3-6 مہینے لگتے ہیں۔ زیادہ تر مریض 24-48 گھنٹوں میں مدد سے چل سکتے ہیں، 6-8 ہفتوں میں عام سرگرمیوں میں واپس آ سکتے ہیں۔",
      },
      online: "آن لائن • مدد کے لیے تیار",
      welcome: "السلام علیکم! میں آپ کا طبی معاون ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      commonQuestions: "عام سوالات:",
      typeMessage: "یا اپنا پیغام ٹائپ کریں:",
      placeholder: "اپنا پیغام ٹائپ کریں...",
      teamOffline: "ہماری ٹیم فی الوقت آن لائن نہیں ہے۔ ہماری ٹیم جلد آپ سے رابطہ کرے گی۔ براہ کرم اپنا نام بتائیں:",
      askPhone: "شکریہ! براہ کرم اپنا فون نمبر بتائیں:",
      invalidPhone: "براہ کرم درست پاکستانی فون نمبر درج کریں (جیسے: 03XXXXXXXXX یا +92-3XX-XXXXXXX)۔ باقی کوششیں:",
      teamContact: "شکریہ! ہماری طبی ٹیم جلد آپ سے دیے گئے نمبر پر رابطہ کرے گی۔",
      reset: "دوبارہ شروع کریں",
    },
  }

  const isValidPakistaniPhone = (phone) => {
    const cleanPhone = phone.replace(/[\s\-$$$$]/g, "")
    const mobilePattern = /^(\+92|0)?3[0-9]{9}$/
    const landlinePattern = /^(\+92|0)?[2-9][0-9]{7,8}$/
    return mobilePattern.test(cleanPhone) || landlinePattern.test(cleanPhone)
  }

  const detectDoctorRequest = (message) => {
    const doctorKeywords = [
      "doctor",
      "dr",
      "team",
      "talk with",
      "speak to",
      "consult",
      "ڈاکٹر",
      "ٹیم",
      "بات کرنا",
      "ملنا",
    ]
    return doctorKeywords.some((keyword) => message.toLowerCase().includes(keyword.toLowerCase()))
  }

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 100)
  }

  const resetChat = () => {
    setMessages([])
    setChatStep("waiting")
    setHasUsedBuiltInQuestions(false)
    setPhoneAttempts(0)
    setInputMessage("")
    setLanguage(null)
  }

  const handleBuiltInQuestion = (question) => {
    const t = medicalData[language]
    const userMessage = {
      type: "user",
      content: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setHasUsedBuiltInQuestions(true)
    scrollToBottom()

    setTimeout(() => {
      const botResponse = {
        type: "bot",
        content: t.answers[question],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
      scrollToBottom()
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const t = medicalData[language]
    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage("")
    scrollToBottom()

    setTimeout(() => {
      let botResponse = ""

      console.log("[v0] Current chat step:", chatStep)
      console.log("[v0] Has used built-in questions:", hasUsedBuiltInQuestions)
      console.log("[v0] Current message:", currentMessage)

      if (chatStep === "waiting" && !hasUsedBuiltInQuestions) {
        if (detectDoctorRequest(currentMessage)) {
          botResponse = t.teamOffline
          setChatStep("asking_name")
          console.log("[v0] Doctor request detected, asking for name")
        } else {
          botResponse = t.teamOffline
          setChatStep("asking_name")
          console.log("[v0] Regular message, asking for name")
        }
      } else if (chatStep === "asking_name") {
        botResponse = t.askPhone
        setChatStep("asking_phone")
        console.log("[v0] Name provided, asking for phone")
      } else if (chatStep === "asking_phone") {
        if (isValidPakistaniPhone(currentMessage)) {
          botResponse = t.teamContact
          setChatStep("completed")
          console.log("[v0] Valid phone provided, completing chat")
        } else {
          const newAttempts = phoneAttempts + 1
          setPhoneAttempts(newAttempts)

          if (newAttempts >= 3) {
            setTimeout(() => resetChat(), 2000)
            botResponse = `${t.invalidPhone} 0. Chat will reset automatically.`
            console.log("[v0] Max phone attempts reached, resetting chat")
          } else {
            botResponse = `${t.invalidPhone} ${3 - newAttempts}`
            console.log("[v0] Invalid phone, attempt", newAttempts)
          }
        }
      } else {
        botResponse = t.teamOffline
        setChatStep("asking_name")
        console.log("[v0] Fallback: asking for name")
      }

      console.log("[v0] Bot response:", botResponse)

      if (botResponse) {
        const botMessage = {
          type: "bot",
          content: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botMessage])
        scrollToBottom()
        console.log("[v0] Bot message added successfully")
      } else {
        console.log("[v0] ERROR: Bot response is empty!")
      }
    }, 1000)
  }

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage)
    const t = medicalData[selectedLanguage]
    setMessages([
      {
        type: "bot",
        content: t.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])
  }

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom()
    }
  }, [messages])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    )
  }

  if (!language) {
    return (
      <div className="fixed inset-x-4 bottom-4 sm:bottom-20 sm:right-4 sm:left-auto w-auto sm:w-80 md:w-96 h-[400px] sm:h-[450px] bg-white rounded-lg shadow-2xl border flex flex-col z-50 max-w-sm sm:max-w-none mx-auto sm:mx-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 sm:p-4 rounded-t-lg flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-white drop-shadow-sm">Medical Assistant</h3>
                <p className="text-blue-100 text-xs sm:text-sm">Select Language / زبان منتخب کریں</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="text-center space-y-4 w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Choose Your Language
              <br />
              اپنی زبان منتخب کریں
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => handleLanguageSelect("english")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 sm:py-4 px-6 rounded-lg transition-colors text-sm sm:text-base"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageSelect("urdu")}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 sm:py-4 px-6 rounded-lg transition-colors text-sm sm:text-base"
              >
                اردو (Urdu)
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const t = medicalData[language]

  return (
    <div className="fixed inset-x-4 bottom-4 sm:bottom-20 sm:right-4 sm:left-auto w-auto sm:w-80 md:w-96 h-[calc(100vh-8rem)] sm:h-[500px] md:h-[600px] bg-white rounded-lg shadow-2xl border flex flex-col z-50 max-w-sm sm:max-w-none mx-auto sm:mx-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 sm:p-4 rounded-t-lg flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-white drop-shadow-sm">Medical Assistant</h3>
              <p className="text-blue-100 text-xs sm:text-sm">{t.online}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto min-h-0">
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className="flex items-start gap-2 max-w-[85%] sm:max-w-[80%]">
                {message.type === "bot" && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                )}
                <div>
                  <div
                    className={`p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                      message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Questions */}
      {chatStep === "waiting" && (
        <div className="p-3 sm:p-4 border-t bg-gray-50 flex-shrink-0">
          <p className="text-sm font-medium text-gray-700 mb-2">{t.commonQuestions}</p>
          <div className="grid grid-cols-1 gap-2 mb-3">
            {t.questions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => handleBuiltInQuestion(question)}
                className="text-left p-2 sm:p-3 text-xs sm:text-sm bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all"
              >
                {question}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600 text-center">{t.typeMessage}</p>
        </div>
      )}

      {/* Input */}
      <div className="p-3 sm:p-4 border-t flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={t.placeholder}
            className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-2 sm:p-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MedicalChatStandalone

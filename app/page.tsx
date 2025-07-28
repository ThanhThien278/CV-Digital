"use client"

import { useState, useEffect } from "react"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Code,
  Globe,
  Instagram,
  GraduationCap,
  Star,
  Shield,
  Heart,
  Sparkles,
  Rocket,
  Target,
  BookOpen,
  Camera,
  Gamepad2,
  Database,
  ExternalLink,
} from "lucide-react"

export default function CVWebsite() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600&text=CV-Nguyen-Thanh-Thien.pdf"
    link.download = "CV-Nguyen-Thanh-Thien.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Navigation */}
      <nav className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50 px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              CV Digital
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              {["About", "Education", "Experience", "Projects", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 ${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                    : "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
                } text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <button
                onClick={downloadCV}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex relative z-10">
        {/* Left Sidebar */}
        <div className="w-80 min-h-screen p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/30 dark:border-gray-700/50 shadow-2xl">
          {/* Profile Section */}
          <div className="text-center mb-8 relative">
            <div className="relative inline-block">
              <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-500 to-purple-600 shadow-2xl hover:scale-105 transition-all duration-500">
                <img src="/profile-photo.jpg" alt="Nguyen Thanh Thien" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Shield className="h-4 w-4 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Nguyen Thanh Thien
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-medium">Security Engineer</p>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {[
                { icon: Github, url: "http://github.com/ThanhThien278", color: "from-gray-600 to-gray-800" },
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/share/1LiBJyWKJL/?mibextid=wwXIfr",
                  color: "from-blue-500 to-blue-700",
                },
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/mr.thien05?igsh=MXh2b2tqeGEyYWY5aA==",
                  color: "from-pink-500 to-purple-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-500" />
              CONTACT
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 shadow-sm">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">0816814427</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 shadow-sm">
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">thiennt2785@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 shadow-sm">
                <MapPin className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  9 DT7, Ấp 4, Xã Đông Thạnh, TP.HCM
                </span>
              </div>
              <a
                href="http://github.com/ThanhThien278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 shadow-sm group"
              >
                <Github className="h-4 w-4 text-gray-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">ThanhThien278</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Rocket className="h-4 w-4 text-orange-500" />
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-4">
              {[
                { name: "MySQL & SQL Server", level: 90, color: "from-blue-500 to-cyan-500", icon: Database },
                { name: "Python", level: 80, color: "from-green-500 to-emerald-500", icon: Code },
                { name: "HTML, JavaScript, CSS", level: 80, color: "from-orange-500 to-red-500", icon: Globe },
              ].map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-indigo-500" />
              CURRENTLY LEARNING
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                  🌍 International English Certificate IELTS
                </div>
              </div>
              <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                  🌐 Computer Network Certificate CCNA
                </div>
              </div>
              <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">💻 PowerShell, Bash</div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-500" />
              LANGUAGES
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">🇻🇳 Vietnamese</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <Star key={dot} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">🇺🇸 English</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((dot) => (
                    <Star key={dot} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                  {[4, 5].map((dot) => (
                    <Star key={dot} className="w-3 h-3 text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Introduction */}
          <section id="about" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>

            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  🚀 Hello, I am <strong>Nguyen Thanh Thien</strong>. Currently a third-year Information Technology
                  student at <em>University of Transport Ho Chi Minh City</em>. I have a strong passion for the IT
                  field, especially <strong>Network Security</strong>, and I am developing myself to become a
                  professional <strong>Network Security Engineer</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  💻 With solid foundations and knowledge in <strong>Computer Networks</strong>,{" "}
                  <strong>Operating Systems</strong>, <strong>Cryptography</strong>, <strong>VPN</strong>,{" "}
                  <strong>Basic Programming</strong>... With extensive knowledge related to security, through
                  understanding and researching the latest information, I am developing and building projects related to{" "}
                  <strong>Computer Networks and Information Security</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  🎯 Additionally, proficiency in <strong>GitHub</strong> helps me manage work effectively and
                  significantly increase personal and team productivity.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Education
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

              <div className="relative flex items-start gap-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    🎓 3rd Year Student - Information Technology
                  </h3>
                  <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    University of Transport Ho Chi Minh City
                  </h4>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                    <GraduationCap className="h-4 w-4" />
                    3rd Year - Currently Studying
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">3.1/4.0</div>
                      <div className="text-sm text-green-700 dark:text-green-300">Cumulative GPA</div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    🔒 Specializing in <strong>Network Security</strong>, <strong>Computer Networks</strong>,{" "}
                    <strong>Operating Systems</strong>, <strong>Cryptography</strong>, <strong>VPN</strong> and modern
                    information security technologies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Projects
              </h2>
            </div>

            <div className="space-y-8">
              {/* Completed Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-500 fill-current" />
                  Completed Projects
                </h3>
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                      <Gamepad2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">🎮 Client-Server Game</h4>
                      <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Completed
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    🚀 Successfully built an entertainment game integrating online and offline systems based on{" "}
                    <strong>Client-Server</strong> model with security features and efficient user management.
                  </p>
                </div>
              </div>

              {/* Ongoing Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-orange-500" />
                  Ongoing Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                          🏢 IT Management Application
                        </h4>
                        <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                          <Rocket className="h-3 w-3" />
                          In Development
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      💼 IT enterprise management application with resource management, personnel management features
                      and comprehensive security system.
                    </p>
                  </div>

                  <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                          🤖 AI Traffic Sign Recognition
                        </h4>
                        <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          In Development
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      🚦 Smart traffic sign recognition application integrated with AI featuring high accuracy and
                      advanced machine learning capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Interests
              </h2>
            </div>

            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/50 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "📚", text: "Reading", color: "from-blue-500 to-cyan-500" },
                  { icon: "🏍️", text: "Traveling", color: "from-green-500 to-emerald-500" },
                  { icon: "💪", text: "Gym", color: "from-red-500 to-pink-500" },
                  { icon: "🏕️", text: "Camping", color: "from-orange-500 to-yellow-500" },
                  { icon: "📸", text: "Photography", color: "from-purple-500 to-indigo-500" },
                  { icon: "🍽️", text: "Food", color: "from-pink-500 to-rose-500" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-gradient-to-r ${interest.color} rounded-xl text-white text-center hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer group`}
                  >
                    <div className="text-2xl mb-2 group-hover:animate-bounce">{interest.icon}</div>
                    <div className="text-sm font-medium">{interest.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

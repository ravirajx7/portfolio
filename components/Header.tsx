"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem("darkMode", newMode.toString())
    document.documentElement.classList.toggle("dark", newMode)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white bg-opacity-10 backdrop-blur-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Ravi Raj
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-purple-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-purple-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </motion.header>
  )
}


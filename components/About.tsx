"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              I'm a Software Engineer at Rocket Software, originally from Ranchi, Jharkhand, India. My passion for
              engineering began in childhood, sparked by my first experience with programming in Logo.
            </p>
            <p className="text-lg mb-4">
              I specialize in backend development, particularly using Java and Spring, while also enjoying the challenge
              of crafting artistic and intuitive web frontends.
            </p>
            <p className="text-lg">
              Beyond coding, I enjoy travelling, discussing philosophy, watching cricket, and reading interesting
              articles. I'm a free thinker who believes everyone should lead their life in the way they like.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-2xl transform rotate-3" />
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Ravi Raj"
              className="absolute inset-0 w-full h-96 object-cover rounded-lg shadow-2xl transform -rotate-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


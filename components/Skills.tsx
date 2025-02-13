"use client"

import { motion } from "framer-motion"
import { Code, Globe, Database, Server } from "lucide-react"

const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Java", "JavaScript/TypeScript", "Python", "Swift", "C/C++"],
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["Spring", "React", "Node.js", "HTML/CSS"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "ElasticSearch"],
  },
  {
    category: "DevOps",
    icon: Server,
    items: ["Git", "Docker", "Kubernetes", "AWS"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 mr-3 text-purple-500" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


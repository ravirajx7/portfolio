"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer II",
    company: "Rocket Software",
    period: "2022 - Present",
    responsibilities: [
      "Working for design development, and maintenance of a cross-platform content management system product.",
      "Streamlining the product release cycle by building CI/CD pipelines, and managing docker images and various projects artifacts.",
      "Contributed to large scale code migration for multiple monoliths and microservices.",
      "Helping customers in using the product effectively and by helping them solve various issues they may stumble upon.",
    ],
  },
  {
    title: "System Engineer",
    company: "Tata Consultancy Services",
    period: "2020 - 2022",
    responsibilities: [
      "Developed and maintained e-commerce web applications for Wiley.",
      "Designed and developed SOAP & RESTFul APIs and integrated third-party payment services like AliPay, Mastercard & Fiserv.",
      "Implemented Single Sign-On (SSO) with OAuth and implemented Role Based Access Control. Utilized various features from AWS & Azure.",
      "Contributed to database schema design for multiple microservices and was part of team for performance optimization of existing feature.",
      "My work was recognized with a promotion to TCS Digital and achieving top performance band A twice.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-purple-400 mb-4">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


import type { Metadata } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Ravi Raj - Innovative Software Engineer",
  description:
    "Explore the portfolio of Ravi Raj, a passionate Software Engineer specializing in backend development and creative web solutions.",
}

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}


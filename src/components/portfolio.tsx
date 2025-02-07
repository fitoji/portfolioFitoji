"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Laptop, BarChart, Package, Github, Twitter, Facebook, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Portfolio() {
    const [theme, setTheme] = useState("light")
    const [isTypingDone, setIsTypingDone] = useState(false)

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-violet-100 dark:from-gray-900 dark:to-violet-950 transition-colors duration-500">
            {/* Navigation */}
            <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/75 dark:bg-gray-950/75 z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <motion.img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-VZRNqIfaH2KaebZ8EmyGo1JgMgaLA8.png"
                            alt="Logo"
                            className="w-12 h-12"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />

                        <div className="flex items-center gap-6">
                            <Button variant="ghost" onClick={toggleTheme}>
                                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </Button>
                            <div className="hidden md:flex gap-6">
                                <a
                                    href="#inicio"
                                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                    Inicio
                                </a>
                                <a
                                    href="#about"
                                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                    Acerca de mi
                                </a>
                                <a
                                    href="#experience"
                                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                    Experiencia
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.section id="inicio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-16 px-4 scroll-mt-20">
                <div className="container mx-auto text-center">
                    <motion.img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto_perfil-iR3cb6cYwcbZ2I83l8ziXctPA25wGl.jpeg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-violet-500 mx-auto mb-8 object-cover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div className="relative inline-block">
                            <motion.span
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                    repeat: 2,
                                    repeatDelay: 1.5,
                                    onComplete: () => setIsTypingDone(true)
                                }}
                                className="inline-block whitespace-nowrap overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text"
                            >
                                Hola!, soy Fitus
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 1 }}
                                animate={{ opacity: isTypingDone ? 0 : [0, 1] }}
                                transition={{
                                    duration: 0.5,
                                    repeat: isTypingDone ? 0 : 5,
                                    repeatDelay: 0.5
                                }}
                                className="absolute right-[-8px] top-0 text-violet-600"
                            >
                                |
                            </motion.span>
                        </motion.div>
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Desarrollo Páginas Web
                    </motion.h2>
                    <motion.img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laptop-cjDAAIzGqo5otLGYXVlEaZ3Cqhbamk.jpeg"
                        alt="Laptop"
                        className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                    />
                </div>
            </motion.section>

            {/* About Section */}
            <section id="about" className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                        Conoce a Fitus
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                        ¡Hola! Soy Fitus, un apasionado del desarrollo web. Mi enfoque es convertir ideas en sitios web funcionales
                        y atractivos. Desde planificación y diseño hasta implementación, me esfuerzo por superar expectativas.
                        Creatividad, innovación y atención personal son mis pilares. ¡Trabajemos juntos para llevar tu visión al
                        mundo digital!
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 px-4 scroll-mt-20">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 ">
                        {[
                            {
                                icon: <Laptop className="w-8 h-8" />,
                                title: "Desarrollo Web",
                                skills: ["HTML", "CSS", "JavaScript", "React"],
                                description:
                                    "En el vertiginoso mundo actual, el desarrollo web es la clave para materializar ideas en línea...",
                            },
                            {
                                icon: <BarChart className="w-8 h-8" />,
                                title: "Web3",
                                skills: ["Solidity", "Forge"],
                                description: "Web 3.0 promete una web más inteligente, conectada y significativa...",
                            },
                            {
                                icon: <Package className="w-8 h-8" />,
                                title: "NFT's",
                                skills: ["Minteo", "Creacion"],
                                description: "Activos digitales únicos respaldados por tecnología blockchain...",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 hover:bg-violet-50 dark:hover:bg-violet-900/50 transition-all duration-300 shadow-lg hover:scale-105">
                                    <div className="text-violet-600 dark:text-violet-400 mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Card className="p-8 bg-gradient-to-r from-violet-600 to-purple-600">
                        <div className="grid md:grid-cols-3 gap-8 items-center text-white">
                            <h2 className="text-3xl font-bold">Escribeme!</h2>
                            <p className="text-violet-100">Contactame para que veamos como podemos empezar tu proyecto web</p>
                            <div className="flex justify-center">
                                <Button variant="secondary" size="lg" asChild>
                                    <a href="mailto:contact@example.com">Contacto</a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-4 bg-gray-900 text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-VZRNqIfaH2KaebZ8EmyGo1JgMgaLA8.png"
                        alt="Logo"
                        className="w-16 h-16 mx-auto mb-6"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    />
                    <p className="mb-8 text-gray-300">
                        Aprendo y creo todos los días. <br /> Creemos un proyecto juntos
                    </p>
                    <div className="flex justify-center gap-6 mb-8">
                        {[
                            { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/pisoliso10" },
                            { icon: <Github className="w-5 h-5" />, href: "https://github.com" },
                            { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
                            { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@example.com" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="w-10 h-10 rounded-full border border-violet-400 flex items-center justify-center text-violet-400 hover:bg-violet-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">Creado por Fitus (2023) &#169;</p>
                </div>
            </footer>
        </div>
    )
}


"use client";

import { useParams } from "next/navigation";
import { languages } from "@/data/languages";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useGame } from "@/context/GameContext";
import { notFound } from "next/navigation";
import { use } from "react";

export default function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);
    const { startGame } = useGame();

    const language = languages.find((l) => l.id === lang);

    if (!language) {
        return notFound();
    }

    const handleStartLearning = () => {
        if (language.id === "python") {
            startGame();
        } else {
            // Smooth scroll to the first section
            const element = document.getElementById("content-start");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const Icon = language.icon;

    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <Icon size={48} className="text-gray-800" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">{language.name}</h1>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {language.description}
                </p>

                {language.id === "python" && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-sm text-gray-400 italic mb-6"
                    >
                        Click Start Learning to discover the true nature of Python.
                    </motion.p>
                )}

                <button
                    onClick={handleStartLearning}
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                    <span className="mr-2">Start Learning</span>
                    <Play size={18} className="fill-current" />
                </button>
            </motion.div>

            <div id="content-start" className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Core Concepts</h2>
                    <div className="grid gap-6">
                        {language.sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">{section.title}</h3>
                                <p className="text-gray-600">{section.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Recommended Resources</h2>
                    <div className="grid gap-4">
                        {language.youtubeLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors group"
                            >
                                <span className="font-medium">{link.title}</span>
                                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

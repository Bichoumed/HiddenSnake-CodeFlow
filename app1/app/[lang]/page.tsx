"use client";

import React, { useState, use } from "react";
import { useParams } from "next/navigation";
import { languages } from "@/data/languages";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useGame } from "@/context/GameContext";
import { notFound } from "next/navigation";

export default function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);
    const { startGame } = useGame();
    const [runExamples, setRunExamples] = useState<Record<string, boolean>>({});

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

    const handleRunExample = (moduleId: number, exampleId: number) => {
        setRunExamples(prev => ({
            ...prev,
            [`${moduleId}-${exampleId}`]: true
        }));
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

                {language.id !== "python" && (
                    <button
                        onClick={handleStartLearning}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        <span className="mr-2">Start Learning</span>
                        <Play size={18} className="fill-current" />
                    </button>
                )}
            </motion.div>

            <div id="content-start" className="space-y-12">
                {language.learningModules ? (
                    <div className="space-y-16">
                        {language.learningModules.map((module, idx) => (
                            <section key={idx} className="space-y-6">
                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h2>
                                    <p className="text-lg text-gray-600">{module.description}</p>
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
                                        <strong>Cas d'usage :</strong> {module.useCase}
                                    </div>
                                </div>

                                <div className="grid gap-8">
                                    {module.examples.map((example, exIdx) => (
                                        <div key={exIdx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{example.title}</h3>
                                            {example.description && (
                                                <p className="text-gray-600 mb-4 text-sm">{example.description}</p>
                                            )}

                                            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden mb-4">
                                                <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 flex items-center space-x-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                                </div>
                                                <pre className="p-4 font-mono text-sm overflow-x-auto">
                                                    <code>{example.code}</code>
                                                </pre>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {example.action === 'run' ? (
                                                    <div className="flex-1 mr-4">
                                                        {runExamples[`${idx}-${exIdx}`] && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Résultat :</div>
                                                                <div className="font-mono text-sm text-gray-700 bg-white p-2 rounded border border-gray-200">
                                                                    {example.output}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex-1 mr-4">
                                                        {/* No static text for game trigger as requested */}
                                                    </div>
                                                )}

                                                <button
                                                    onClick={() => {
                                                        if (example.action === 'game') {
                                                            startGame();
                                                        } else {
                                                            handleRunExample(idx, exIdx);
                                                        }
                                                    }}
                                                    className="px-6 py-2 rounded-lg font-semibold text-white transition-colors bg-green-600 hover:bg-green-700"
                                                >
                                                    Run python
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <>
                        {language.example && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Learning by Examples</h2>
                                <p className="text-gray-600 mb-6">
                                    With our "Run python" editor, you can edit Python code and view the result
                                </p>
                                <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800">Example</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm mb-4">
                                        {language.example.code}
                                    </div>
                                    <button
                                        onClick={startGame}
                                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Run Python »
                                    </button>
                                </div>
                            </section>
                        )}
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
                    </>
                )}

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

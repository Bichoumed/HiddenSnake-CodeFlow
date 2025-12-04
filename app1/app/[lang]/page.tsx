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
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="flex items-center space-x-5 mb-8">
                    <motion.div 
                        className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200/50"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Icon size={56} className="text-gray-800" />
                    </motion.div>
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                            {language.name}
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
                    {language.description}
                </p>

                {language.id !== "python" && (
                    <motion.button
                        onClick={handleStartLearning}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        <span className="mr-2">Start Learning</span>
                        <Play size={18} className="fill-current group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                )}
            </motion.div>

            <div id="content-start" className="space-y-12">
                {language.learningModules ? (
                    <div className="space-y-16">
                        {language.learningModules.map((module, idx) => (
                            <motion.section 
                                key={idx} 
                                className="space-y-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="border-b border-gray-200/60 pb-6">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                                        {module.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-4">{module.description}</p>
                                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 text-blue-900 text-sm shadow-sm">
                                        <strong className="text-blue-700">💡 Cas d'usage :</strong> {module.useCase}
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    {module.examples.map((example, exIdx) => (
                                        <motion.div 
                                            key={exIdx} 
                                            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: exIdx * 0.1 }}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{example.title}</h3>
                                            {example.description && (
                                                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{example.description}</p>
                                            )}

                                            <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden mb-5 shadow-lg">
                                                <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center space-x-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                                                    <span className="ml-3 text-xs text-gray-400 font-mono">code.py</span>
                                                </div>
                                                <pre className="p-5 font-mono text-sm overflow-x-auto bg-gray-900 text-gray-100">
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

                                                <motion.button
                                                    onClick={() => {
                                                        if (example.action === 'game') {
                                                            startGame();
                                                        } else {
                                                            handleRunExample(idx, exIdx);
                                                        }
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-6 py-3 rounded-xl font-semibold text-white transition-all bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl"
                                                >
                                                    ▶ Run python
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </div>
                ) : (
                    <>
                        {language.example && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Learning by Examples
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    With our "Run python" editor, you can edit Python code and view the result
                                </p>
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200/60">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-semibold text-gray-800">Example</h3>
                                    </div>
                                    <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 font-mono text-sm mb-6 text-gray-100 shadow-inner">
                                        {language.example.code}
                                    </div>
                                    <motion.button
                                        onClick={startGame}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Run Python »
                                    </motion.button>
                                </div>
                            </motion.section>
                        )}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Core Concepts
                            </h2>
                            <div className="grid gap-6">
                                {language.sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 bg-white rounded-2xl border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-gray-800">{section.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Recommended Resources
                    </h2>
                    <div className="grid gap-4">
                        {language.youtubeLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center justify-between p-5 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all border border-red-100 shadow-sm hover:shadow-md group"
                            >
                                <span className="font-medium">{link.title}</span>
                                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                            </motion.a>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

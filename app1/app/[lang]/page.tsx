"use client";

import React, { useState, use } from "react";
import { useParams } from "next/navigation";
import { languages } from "@/data/languages";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

    const handleRunExample = (moduleId: number, exampleId: number) => {
        setRunExamples(prev => ({
            ...prev,
            [`${moduleId}-${exampleId}`]: true
        }));
    };

    const Icon = language.icon;

    return (
        <div className="max-w-5xl mx-auto px-6 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-12"
            >
                <div className="flex items-center space-x-5 mb-6">
                    <motion.div 
                        className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200/50"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Icon size={52} className="text-gray-800" />
                    </motion.div>
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
                            {language.name}
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                    {language.description}
                </p>
            </motion.div>

            <div id="content-start" className="space-y-12">
                {language.learningModules ? (
                    <div className="space-y-16">
                        {language.learningModules.map((module, idx) => (
                            <motion.section 
                                key={idx} 
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                            >
                                <div className="border-b border-gray-200/50 pb-6">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">{module.title}</h2>
                                    <p className="text-lg text-gray-600 mb-4">{module.description}</p>
                                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl text-blue-900 text-sm border border-blue-100 shadow-sm">
                                        <strong className="text-blue-700">💡 Cas d'usage :</strong> <span className="text-blue-800">{module.useCase}</span>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    {module.examples.map((example, exIdx) => (
                                        <motion.div 
                                            key={exIdx} 
                                            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (idx * 0.05) + (exIdx * 0.03), duration: 0.3 }}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></span>
                                                {example.title}
                                            </h3>
                                            {example.description && (
                                                <p className="text-gray-600 mb-4 text-sm pl-3.5">{example.description}</p>
                                            )}

                                            <div className="mb-4">
                                                <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-lg mb-4">
                                                    <div className="bg-gray-800 px-4 py-2.5 border-b border-gray-700 flex items-center justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                                                        </div>
                                                        <span className="text-xs text-gray-400 font-mono">code</span>
                                                    </div>
                                                    <pre className="p-5 font-mono text-sm overflow-x-auto text-gray-100 bg-gray-900">
                                                        <code>{example.code}</code>
                                                    </pre>
                                                </div>
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
                                                    className="px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-200 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg whitespace-nowrap"
                                                >
                                                    Run python
                                                </motion.button>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                {example.action === 'run' ? (
                                                    <div className="flex-1">
                                                        {runExamples[`${idx}-${exIdx}`] && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="text-xs font-semibold text-gray-500 uppercase mb-2 flex items-center gap-2">
                                                                    <span className="w-1 h-1 rounded-full bg-green-500"></span>
                                                                    Résultat :
                                                                </div>
                                                                <div className="font-mono text-sm text-gray-800 bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 shadow-sm">
                                                                    {example.output}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex-1">
                                                        {/* No static text for game trigger as requested */}
                                                    </div>
                                                )}
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
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Learning by Examples</h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    With our "Run python" editor, you can edit Python code and view the result
                                </p>
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200/50">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></span>
                                            Example
                                        </h3>
                                    </div>
                                    <div>
                                        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-lg mb-4">
                                            <div className="bg-gray-800 px-4 py-2.5 border-b border-gray-700 flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                                                </div>
                                                <span className="text-xs text-gray-400 font-mono">code</span>
                                            </div>
                                            <pre className="p-5 font-mono text-sm overflow-x-auto text-gray-100 bg-gray-900">
                                                <code>{language.example.code}</code>
                                            </pre>
                                        </div>
                                        <motion.button
                                            onClick={startGame}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
                                        >
                                            Run Python »
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.section>
                        )}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Core Concepts</h2>
                            <div className="grid gap-6">
                                {language.sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></span>
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Recommended Resources</h2>
                    <div className="grid gap-3">
                        {language.youtubeLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all duration-200 group border border-red-100 shadow-sm hover:shadow-md"
                            >
                                <span className="font-medium flex items-center gap-2">
                                    <span className="text-red-500">▶</span>
                                    {link.title}
                                </span>
                                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600" />
                            </motion.a>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

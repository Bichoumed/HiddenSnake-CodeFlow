"use client";

import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { BookOpen, Sparkles } from "lucide-react";

export function Navbar() {
    const { isGameActive } = useGame();

    return (
        <motion.header
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: isGameActive ? 0 : 1,
                y: isGameActive ? -100 : 0
            }}
            transition={{ duration: 1.5 }}
            className="h-16 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm fixed top-0 right-0 left-64 z-10"
        >
            <div className="h-full px-8 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <motion.div 
                        className="p-2 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 shadow-lg shadow-blue-500/30"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <BookOpen size={20} className="text-white" />
                    </motion.div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                            Interactive Documentation
                        </h1>
                        <Sparkles size={16} className="text-blue-500 animate-pulse" />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

"use client";

import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { Github, Twitter } from "lucide-react";

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
            className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 right-0 left-64 z-10"
        >
            <div className="h-full px-8 flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-800">
                    Interactive Documentation
                </h1>

                <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                        <Github size={20} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors">
                        <Twitter size={20} />
                    </button>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500" />
                </div>
            </div>
        </motion.header>
    );
}

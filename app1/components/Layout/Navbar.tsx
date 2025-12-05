"use client";

import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { BookOpen, Sparkles, Home } from "lucide-react";
import Link from "next/link";

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
            className="h-16 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 shadow-lg shadow-blue-500/30 fixed top-0 right-0 left-64 z-10"
        >
            <div className="h-full px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
                    <motion.div
                        className="p-2 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg group-hover:bg-white/30 transition-all"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Home size={20} className="text-white" />
                    </motion.div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                            Interactive Documentation
                        </h1>
                        <Sparkles size={16} className="text-white/90 animate-pulse" />
                    </div>
                </Link>
            </div>
        </motion.header>
    );
}

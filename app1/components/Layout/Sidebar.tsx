"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/data/languages";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { Code2, Sparkles } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();
    const { isGameActive } = useGame();

    return (
        <motion.aside
            initial={{ opacity: 1, x: 0 }}
            animate={{
                opacity: isGameActive ? 0 : 1,
                x: isGameActive ? -300 : 0
            }}
            transition={{ duration: 1.5 }}
            className="w-64 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-800/50 z-20 shadow-2xl"
        >
            <div className="p-6 pb-24">
                <motion.div
                    className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-800/50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 shadow-lg shadow-blue-500/30">
                        <Code2 size={24} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent tracking-tight">
                            DevLearn
                        </h2>
                        <p className="text-xs text-gray-400 mt-0.5">Interactive Learning</p>
                    </div>
                </motion.div>
                <nav className="space-y-1.5">
                    {languages.map((lang, index) => {
                        const isActive = pathname === `/${lang.id}`;
                        const Icon = lang.icon;

                        return (
                            <motion.div
                                key={lang.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <Link
                                    href={`/${lang.id}`}
                                    className={cn(
                                        "group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg shadow-blue-500/30 scale-[1.02]"
                                            : "hover:bg-gray-800/50 text-gray-400 hover:text-white hover:scale-[1.01]"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <div className={cn(
                                        "relative z-10 transition-transform duration-300",
                                        isActive ? "scale-110" : "group-hover:scale-110"
                                    )}>
                                        <Icon size={20} />
                                    </div>
                                    <span className={cn(
                                        "font-medium relative z-10 transition-all duration-300",
                                        isActive ? "font-semibold" : ""
                                    )}>
                                        {lang.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            className="absolute right-3"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            <Sparkles size={16} className="text-white" />
                                        </motion.div>
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>
            </div>

            <div className="absolute bottom-0 w-full p-6 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
                <p className="text-xs text-gray-500 text-center">
                    © 2024 DevLearn Platform
                </p>
            </div>
        </motion.aside>
    );
}

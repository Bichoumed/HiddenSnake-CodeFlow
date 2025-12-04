"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/data/languages";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { Code2 } from "lucide-react";

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
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-800/50">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 shadow-lg">
                        <Code2 size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent tracking-tight">
                        DevLearn
                    </h2>
                </div>
                <nav className="space-y-1.5">
                    {languages.map((lang, idx) => {
                        const isActive = pathname === `/${lang.id}`;
                        const Icon = lang.icon;

                        return (
                            <motion.div
                                key={lang.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link
                                    href={`/${lang.id}`}
                                    className={cn(
                                        "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg shadow-blue-500/25"
                                            : "hover:bg-gray-800/50 text-gray-400 hover:text-white hover:translate-x-1"
                                    )}
                                >
                                    <Icon 
                                        size={20} 
                                        className={cn(
                                            "transition-transform duration-200",
                                            isActive ? "scale-110" : "group-hover:scale-110"
                                        )} 
                                    />
                                    <span className="font-medium text-sm">{lang.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
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

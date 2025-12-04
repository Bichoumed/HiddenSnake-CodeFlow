"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/data/languages";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";

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
            className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-800 z-20"
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-8 text-green-400 tracking-wider">DevLearn</h2>
                <nav className="space-y-2">
                    {languages.map((lang) => {
                        const isActive = pathname === `/${lang.id}`;
                        const Icon = lang.icon;

                        return (
                            <Link
                                key={lang.id}
                                href={`/${lang.id}`}
                                className={cn(
                                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                                    isActive
                                        ? "bg-green-600 text-white shadow-lg shadow-green-900/20"
                                        : "hover:bg-gray-800 text-gray-400 hover:text-white"
                                )}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{lang.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="absolute bottom-0 w-full p-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 text-center">
                    © 2024 DevLearn Platform
                </p>
            </div>
        </motion.aside>
    );
}

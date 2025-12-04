"use client";

import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { SnakeGame } from "@/components/SnakeGame/SnakeGame";

export function GameWrapper({ children }: { children: React.ReactNode }) {
    const { isGameActive } = useGame();

    return (
        <>
            <motion.main
                initial={{ opacity: 1 }}
                animate={{ opacity: isGameActive ? 0 : 1 }}
                transition={{ duration: 1.5 }}
                className="pt-24 px-8 pb-12 min-h-screen"
            >
                {children}
            </motion.main>

            {isGameActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.0 }}
                    className="fixed inset-0 z-50 bg-white"
                >
                    <SnakeGame />
                </motion.div>
            )}
        </>
    );
}

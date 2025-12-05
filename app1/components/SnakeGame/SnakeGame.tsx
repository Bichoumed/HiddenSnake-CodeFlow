"use client";

import { useEffect, useRef, useState } from "react";
import { useGame } from "@/context/GameContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export function SnakeGame() {
    const { endGame } = useGame();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const directionRef = useRef({ dx: 1, dy: 0 });

    // Game constants
    const GRID_SIZE = 20;
    const SPEED = 100;

    // Direction change function
    const changeDirection = (newDx: number, newDy: number) => {
        const { dx, dy } = directionRef.current;
        // Prevent reversing direction
        if ((newDx === 1 && dx !== -1) || (newDx === -1 && dx !== 1) ||
            (newDy === 1 && dy !== -1) || (newDy === -1 && dy !== 1)) {
            directionRef.current = { dx: newDx, dy: newDy };
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let snake = [{ x: 10, y: 10 }];
        let food = { x: 15, y: 15 };
        let gameLoop: NodeJS.Timeout;

        const draw = () => {
            // Clear canvas
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Barriers/Walls - Barrières visibles
            const borderWidth = 8;
            ctx.fillStyle = "#374151"; // gray-700 - dark gray
            // Top border
            ctx.fillRect(0, 0, canvas.width, borderWidth);
            // Bottom border
            ctx.fillRect(0, canvas.height - borderWidth, canvas.width, borderWidth);
            // Left border
            ctx.fillRect(0, 0, borderWidth, canvas.height);
            // Right border
            ctx.fillRect(canvas.width - borderWidth, 0, borderWidth, canvas.height);

            // Draw Snake
            ctx.fillStyle = "#4ade80"; // green-400
            snake.forEach((segment) => {
                ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
            });

            // Draw Food
            ctx.fillStyle = "#ef4444"; // red-500
            ctx.beginPath();
            ctx.arc(
                food.x * GRID_SIZE + GRID_SIZE / 2,
                food.y * GRID_SIZE + GRID_SIZE / 2,
                GRID_SIZE / 2 - 2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        };

        const update = () => {
            const { dx, dy } = directionRef.current;
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };

            // Wall collision
            if (
                head.x < 0 ||
                head.x >= canvas.width / GRID_SIZE ||
                head.y < 0 ||
                head.y >= canvas.height / GRID_SIZE
            ) {
                handleGameOver();
                return;
            }

            // Self collision
            if (snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
                handleGameOver();
                return;
            }

            snake.unshift(head);

            // Eat food
            if (head.x === food.x && head.y === food.y) {
                setScore((s) => s + 1);
                food = {
                    x: Math.floor(Math.random() * (canvas.width / GRID_SIZE)),
                    y: Math.floor(Math.random() * (canvas.height / GRID_SIZE)),
                };
            } else {
                snake.pop();
            }

            draw();
        };

        const handleGameOver = () => {
            clearInterval(gameLoop);
            setGameOver(true);
        };

        const handleKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowUp":
                    changeDirection(0, -1);
                    break;
                case "ArrowDown":
                    changeDirection(0, 1);
                    break;
                case "ArrowLeft":
                    changeDirection(-1, 0);
                    break;
                case "ArrowRight":
                    changeDirection(1, 0);
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);
        gameLoop = setInterval(update, SPEED);

        return () => {
            clearInterval(gameLoop);
            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} className="block" />

            {/* Score Display - Plus grand et plus attirant */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-blue-500/30">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">Score</div>
                <div className="text-3xl sm:text-5xl font-bold">{score}</div>
            </div>

            {/* On-Screen Controls - Contrôles tactiles pour mobile */}
            {!gameOver && (
                <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
                    {/* Up Arrow */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changeDirection(0, -1)}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all active:scale-95"
                    >
                        <ArrowUp size={32} />
                    </motion.button>

                    {/* Left, Down, Right Arrows */}
                    <div className="flex gap-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => changeDirection(-1, 0)}
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all active:scale-95"
                        >
                            <ArrowLeft size={32} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => changeDirection(0, 1)}
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all active:scale-95"
                        >
                            <ArrowDown size={32} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => changeDirection(1, 0)}
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all active:scale-95"
                        >
                            <ArrowRight size={32} />
                        </motion.button>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {gameOver && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-8 sm:px-16 py-8 sm:py-12 rounded-3xl shadow-2xl border-2 border-gray-700 text-center max-w-2xl w-full">
                            {/* Game Over Title - Très grand et attirant */}
                            <motion.h1
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                className="text-4xl sm:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                            >
                                GAME OVER
                            </motion.h1>

                            {/* Final Score - Plus grand */}
                            <div className="mb-6 sm:mb-8">
                                <p className="text-lg sm:text-2xl text-gray-400 mb-2">Score Final</p>
                                <p className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                    {score}
                                </p>
                            </div>

                            {/* Secret Message */}
                            <p className="text-sm sm:text-lg font-mono text-gray-300 mb-6 sm:mb-8 italic">
                                "Don't tell anyone about this."
                            </p>

                            {/* Close Button - Plus grand et attirant */}
                            <button
                                onClick={endGame}
                                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 hover:from-blue-600 hover:via-blue-700 hover:to-green-600 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                            >
                                Fermer
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useGame } from "@/context/GameContext";
import { motion, AnimatePresence } from "framer-motion";

export function SnakeGame() {
    const { endGame } = useGame();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Game constants
    const GRID_SIZE = 20;
    const SPEED = 100;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let snake = [{ x: 10, y: 10 }];
        let food = { x: 15, y: 15 };
        let dx = 1;
        let dy = 0;
        let gameLoop: NodeJS.Timeout;

        const draw = () => {
            // Clear canvas
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
                    if (dy !== 1) { dx = 0; dy = -1; }
                    break;
                case "ArrowDown":
                    if (dy !== -1) { dx = 0; dy = 1; }
                    break;
                case "ArrowLeft":
                    if (dx !== 1) { dx = -1; dy = 0; }
                    break;
                case "ArrowRight":
                    if (dx !== -1) { dx = 1; dy = 0; }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);
        gameLoop = setInterval(update, SPEED);

        return () => {
            clearInterval(gameLoop);
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} className="block" />

            <div className="absolute top-4 left-4 text-2xl font-bold text-gray-300">
                Score: {score}
            </div>

            <AnimatePresence>
                {gameOver && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full shadow-2xl"
                    >
                        <p className="text-sm font-mono">Don't tell anyone about this.</p>
                        <button
                            onClick={endGame}
                            className="mt-2 text-xs text-gray-400 hover:text-white underline w-full text-center block"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

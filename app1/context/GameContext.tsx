"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
  isGameActive: boolean;
  startGame: () => void;
  endGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = () => setIsGameActive(true);
  const endGame = () => setIsGameActive(false);

  return (
    <GameContext.Provider value={{ isGameActive, startGame, endGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

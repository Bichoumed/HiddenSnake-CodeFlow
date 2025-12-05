"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="max-w-5xl mx-auto text-center py-8 sm:py-12 w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            Apprenez la Programmation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 px-4">
            Une plateforme éducative pour apprendre les langages de programmation
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
            Python • Java • JavaScript • C • C++ • Go
          </p>
        </motion.div>

        {/* 3 Characteristics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2"
        >
          {/* Inclusif */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200 shadow-lg"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-green-500 rounded-2xl">
                <Users size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Inclusif</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Gratuit et accessible à tous
            </p>
          </motion.div>

          {/* Responsable */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-blue-500 rounded-2xl">
                <Shield size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Responsable</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Technologies Open Source
            </p>
          </motion.div>

          {/* Durable */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-green-200 shadow-lg sm:col-span-2 md:col-span-1"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-green-600 rounded-2xl">
                <Sprout size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Durable</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Enseigne Python, langage libre
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-4"
        >
          <Link href="/c" className="block sm:inline-block">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Commencer à apprendre
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

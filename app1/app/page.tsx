"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto text-center py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent mb-6">
            Apprenez la Programmation
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Une plateforme éducative pour apprendre les langages de programmation
          </p>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Python • Java • JavaScript • C • C++ • Go
          </p>
        </motion.div>

        {/* 3 Characteristics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {/* Inclusif */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500 rounded-2xl">
                <Users size={40} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Inclusif</h3>
            <p className="text-gray-600 leading-relaxed">
              Gratuit et accessible à tous
            </p>
          </motion.div>

          {/* Responsable */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-500 rounded-2xl">
                <Shield size={40} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Responsable</h3>
            <p className="text-gray-600 leading-relaxed">
              Technologies Open Source
            </p>
          </motion.div>

          {/* Durable */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-600 rounded-2xl">
                <Sprout size={40} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Durable</h3>
            <p className="text-gray-600 leading-relaxed">
              Enseigne Python, langage libre
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/c">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Commencer à apprendre
              <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

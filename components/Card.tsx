'use client';
import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Card({ title, icon, children }: CardProps) {
  return (
    <div className="h-full rounded-2xl border border-gray-800/50 bg-black/50 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300">
      <div className="mb-4 flex items-center">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent">
          {title}
        </h3>
      </div>
      {/* --- CORREZIONE QUI: <p> SOSTITUITO CON <div> --- */}
      <div className="text-gray-400">{children}</div>
    </div>
  );
}

'use client';
import React from 'react';

// Definiamo qui le "props" che il nostro componente può accettare
interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'outline'; // <-- Questa è la riga chiave che mancava o era sbagliata
}

export default function Button({ children, variant }: ButtonProps) {
  const baseStyles = 'cursor-pointer rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 ease-in-out hover:scale-[1.02]';

  const variantStyles = {
    primary: 'bg-white text-emerald-900 font-bold hover:bg-emerald-500 hover:text-white',
    outline: 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </div>
  );
}

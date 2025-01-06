"use client"

import Link from 'next/link';
import React from 'react';
import { ButtonProps } from '../../../types/Types';



const Button: React.FC<ButtonProps> = ({ label,href }) => {
  return (
    <Link
    href={href}
      
      className="my-5 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
      style={{
        background: 'linear-gradient(90deg, #FF7F50, #FFB347)', 
      }}
    >
      {label}
    </Link>
  );
};

export default Button;

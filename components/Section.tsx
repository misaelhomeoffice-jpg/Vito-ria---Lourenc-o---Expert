import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps & { children: React.ReactNode, bgColor?: string }> = ({ 
  id, 
  children, 
  className = "",
  bgColor = "bg-transparent"
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${bgColor} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar consulta gratuita", 
  subtext = "Sem compromisso",
  className = "",
  variant = 'primary'
}) => {
  const baseStyles = "flex flex-col items-center justify-center w-full max-w-sm px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center gap-2 font-bold text-lg uppercase tracking-wide">
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className="text-xs opacity-90 font-light mt-1">
          {subtext}
        </span>
      )}
    </a>
  );
};
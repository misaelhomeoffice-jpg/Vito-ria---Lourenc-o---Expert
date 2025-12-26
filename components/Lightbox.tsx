import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, src, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
        aria-label="Fechar"
      >
        <X size={32} />
      </button>
      <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
        <img 
          src={src} 
          alt="Visualização ampliada" 
          className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    </div>
  );
};
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ButtonProps {
  text: string;
  subtext?: string;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  fullWidth = false, 
  className = '',
  variant = 'primary'
}) => {
  const baseStyles = "group relative flex flex-col items-center justify-center py-4 px-8 rounded-lg font-bold transition-all duration-300 transform active:scale-95";
  
  // Updated shadow colors for Gold theme
  const variants = {
    primary: "bg-brand-accent hover:bg-brand-accentHover text-black shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10"
  };

  return (
    <a 
      href={CONTACT_INFO.whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <div className="flex items-center gap-2 text-lg uppercase tracking-wide">
        <MessageCircle className="w-6 h-6 fill-current" />
        {text}
      </div>
      {subtext && (
        <span className="text-xs font-normal opacity-90 mt-1">
          {subtext}
        </span>
      )}
    </a>
  );
};
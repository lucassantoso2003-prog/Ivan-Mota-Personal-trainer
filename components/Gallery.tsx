import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const openLightbox = (img: string) => {
    setSelectedImg(img);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {IMAGES.gallery.map((img, index) => (
          <div 
            key={index} 
            className="relative group aspect-square overflow-hidden rounded-xl bg-brand-card cursor-pointer border border-white/5"
            onClick={() => openLightbox(img)}
          >
            <img 
              src={img} 
              alt={`Resultado ou treino Ivan Mota ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-brand-muted text-xs mt-4">
        * Resultados podem variar de pessoa para pessoa.
      </p>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-brand-accent p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImg} 
            alt="Zoom" 
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
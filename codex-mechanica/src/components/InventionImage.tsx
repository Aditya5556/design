import { useState } from 'react';
import { Compass } from 'lucide-react';

interface InventionImageProps {
  src: string;
  alt: string;
  title: string;
  plateNumber: string;
  className?: string;
}

export function InventionImage({
  src,
  alt,
  title,
  plateNumber,
  className = '',
}: InventionImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EFEAE0] text-stone-700 p-8 text-center border border-stone-300 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="w-8 h-8 text-[#1B365D] mb-3 stroke-[1.5]" />
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
          {plateNumber}
        </p>
        <p className="font-serif text-xl font-semibold text-stone-900 mt-1">
          {title}
        </p>
        <p className="text-xs text-stone-500 mt-2 max-w-xs">
          Archival plate study unavailable in preview cache.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover select-none ${className}`}
      draggable={false}
    />
  );
}

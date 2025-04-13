// components/HoverImage.tsx
import React from 'react';
import Image from 'next/image';

interface HoverImageProps {
  text: React.ReactNode;
  imageSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  hideIcon?: boolean; // Option to hide the eye icon
}

export const HoverImage: React.FC<HoverImageProps> = ({ 
  text, 
  imageSrc, 
  alt, 
  width = 300, 
  height = 200,
  className = '',
  hideIcon = false
}) => {
  return (
    <span className={`hover-image-container ${hideIcon ? 'no-icon' : ''} ${className}`}>
      {text}
      <div className="hover-image">
        <Image 
          src={imageSrc} 
          alt={alt || "Hover image"} 
          width={width}
          height={height}
        />
      </div>
    </span>
  );
};

// For compatibility with older Next.js versions
export const HoverImageStatic: React.FC<Omit<HoverImageProps, 'width' | 'height'> & {
  width?: string | number;
  height?: string | number;
}> = ({ 
  text, 
  imageSrc, 
  alt, 
  width = 300, 
  height = 'auto',
  className = '',
  hideIcon = false
}) => {
  return (
    <span className={`hover-image-container ${hideIcon ? 'no-icon' : ''} ${className}`}>
      {text}
      <img 
        className="hover-image" 
        src={imageSrc} 
        alt={alt || "Hover image"} 
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height
        }} 
      />
    </span>
  );
};

export default HoverImage;

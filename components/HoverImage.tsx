// components/HoverImage.tsx
import React from 'react';

interface HoverImageProps {
  text: React.ReactNode;
  imageSrc: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export const HoverImage: React.FC<HoverImageProps> = ({ 
  text, 
  imageSrc, 
  alt, 
  width = 300, 
  height = 'auto' 
}) => {
  return (
    <span className="hover-image-container">
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

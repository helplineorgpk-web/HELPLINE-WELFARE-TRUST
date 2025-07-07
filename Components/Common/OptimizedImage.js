import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ src, alt, width, height, className, priority = false }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`image-wrapper ${isLoading ? 'loading' : 'loaded'}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setLoading(false)}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default OptimizedImage;

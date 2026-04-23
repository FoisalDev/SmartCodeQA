'use client';

import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  filename: string;
  alt?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
}

const aspectClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]'
};

function getImageSrc(filename: string): string {
  if (filename.includes('.')) {
    return `/images/${filename}`;
  }
  return `/images/${filename}.png`;
}

export function ImagePlaceholder({
  filename,
  alt = 'Placeholder image',
  className,
  aspectRatio = 'square'
}: ImagePlaceholderProps) {
  const src = getImageSrc(filename);
  const extensions = ['.png', '.jpg', '.jpeg', '.webp'];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-surface border border-border',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          const currentExt = target.src.split('.').pop();
          const baseName = filename.includes('.') ? filename : filename;
          
          for (const ext of extensions) {
            if (ext.replace('.', '') !== currentExt) {
              target.src = `/images/${baseName}${ext}`;
              break;
            }
          }
        }}
      />
    </div>
  );
}
// components/DriftImage.tsx
import { useEffect } from 'react'
import Script from 'next/script'

export default function DriftImage({
  src,
  zoomSrc,
  alt = '',
  width = 300,
  className = ''
}: {
  src: string
  zoomSrc?: string
  alt?: string
  width?: number
  className?: string
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Drift) {
      const image = document.querySelector('#drift-image') as HTMLImageElement
      if (image && !image.getAttribute('data-drift-attached')) {
        new window.Drift(image, {
          paneContainer: document.body,
          inlinePane: false,
          hoverBoundingBox: true
        })
        image.setAttribute('data-drift-attached', 'true')
      }
    }
  }, [])

  return (
    <>
      <Script
        src="https://unpkg.com/drift-zoom/dist/Drift.min.js"
        strategy="lazyOnload"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/drift-zoom/dist/drift-basic.min.css"
      />
      <img
        id="drift-image"
        src={src}
        data-zoom={zoomSrc || src}
        alt={alt}
        style={{ width }}
        className={className}
      />
    </>
  )
}

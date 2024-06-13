'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

import cn from '@/utils/cn'

type ImageZoomProps = {
  image: {
    src: string
    alt: string
  }
}

const ImageZoom: React.FC<ImageZoomProps> = ({ image }: ImageZoomProps) => {
  const baseProductRef = useRef<HTMLDivElement | null>(null)
  const zoomAreaRef = useRef<HTMLDivElement | null>(null)
  const zoomedArea = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (baseProductRef.current && zoomAreaRef.current) {
        const baseProduct = baseProductRef.current.getBoundingClientRect()
        const zoomArea = zoomAreaRef.current.getBoundingClientRect()

        const top = Math.max(0, Math.min(baseProduct.height - zoomArea.height, event.clientY - baseProduct.top - zoomArea.height / 2))
        const left = Math.max(0, Math.min(baseProduct.width - zoomArea.width, event.clientX - baseProduct.left - zoomArea.width / 2))
        if (zoomAreaRef.current && zoomedArea.current) {
          zoomAreaRef.current.style.top = `${top}px`
          zoomAreaRef.current.style.left = `${left}px`
          zoomedArea.current.style.backgroundPositionX = `${-left * 3}px`
          zoomedArea.current.style.backgroundPositionY = `${-top * 3}px`
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="single-product-image" className="group relative h-[600px] w-full" ref={baseProductRef}>
      <Image width={400} height={600} className="object-contain" alt={image.alt} src={image.src} />
      <div ref={zoomAreaRef} id="zoom-area" className="zoom-area group-hover:visible group-hover:opacity-40"></div>
      <div
        ref={zoomedArea}
        id="zoomed-area"
        className="zoomed-area group-hover:visible group-hover:opacity-100"
        style={{ backgroundImage: `url(${image.src})` }}></div>
    </section>
  )
}

export default ImageZoom

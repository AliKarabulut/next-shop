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
  const zoomedImageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (baseProductRef.current) {
        const baseProduct = baseProductRef.current.getBoundingClientRect()
        const top = Math.max(0, Math.min(baseProduct.height - 192, event.clientY - baseProduct.top - 96))
        const left = Math.max(0, Math.min(baseProduct.width - 160, event.clientX - baseProduct.left - 80))
        if (zoomAreaRef.current && zoomedImageRef.current) {
          zoomAreaRef.current.style.top = `${top}px`
          zoomAreaRef.current.style.left = `${left}px`
          zoomedImageRef.current.style.backgroundPositionX = `${-left * 3}px`
          zoomedImageRef.current.style.backgroundPositionY = `${-top * 3}px`
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={baseProductRef} id="base-product" className="group absolute inset-0">
      <Image width={400} height={600} className="object-contain" alt={image.alt} src={image.src} />
      <div
        ref={zoomAreaRef}
        id="zoom-area"
        className={cn(
          'invisible absolute flex h-48 w-40 cursor-crosshair items-center justify-center bg-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-40',
        )}></div>
      <div
        ref={zoomedImageRef}
        id="zoomed-image"
        className="bg-ori invisible absolute -inset-8 translate-x-[110%] bg-blue-100 bg-[length:1200px_1800px] bg-no-repeat opacity-0 transition-opacity delay-300 duration-200 group-hover:visible group-hover:opacity-100"
        style={{ backgroundImage: `url(${image.src})` }}></div>
    </div>
  )
}

export default ImageZoom

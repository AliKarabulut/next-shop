'use client'
import { useState } from 'react'
// import Image from 'next/image'

import cn from '@/utils/cn'

type ImageZoomProps = {
  imageUrl?: string
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imageUrl }: ImageZoomProps) => {
  const [position, setPosition] = useState({ left: 0, top: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ left: event.clientX, top: event.clientY })
    console.log(event.clientX, event.clientY)
  }

  return (
    <div onMouseMove={handleMouseMove} className="absolute inset-0">
      {/* <Image /> */}
      <div className={cn('absolute h-48 w-40 bg-white/40')}>ImageZoom</div>
      <div style={{ left: position.left, top: position.top }}></div>
    </div>
  )
}

export default ImageZoom

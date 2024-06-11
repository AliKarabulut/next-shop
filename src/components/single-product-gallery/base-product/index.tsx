'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'

import ImageZoom from '@/components/image-zoom'

const images = [
  {
    src: '/products/zoom-1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/products/zoom-2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/products/zoom-3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/products/zoom-1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/products/zoom-2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/products/zoom-3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/products/zoom-1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/products/zoom-2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/products/zoom-3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/products/zoom-1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/products/zoom-2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/products/zoom-3.jpg',
    alt: 'Image 3',
  },
]

const BaseProduct = () => {
  const [image, setImage] = useState(images[0])

  const setZoomImageUrl = (image: { src: string; alt: string }) => {
    setImage(image)
  }
  return (
    <div className="base-product-wrapper ml-40 mt-40 w-[400px]">
      <div className="relative h-[600px] w-full rounded-lg border bg-red-100">
        <ImageZoom image={image} />
        <div className="prev-button absolute left-0 top-1/2 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-blue-400"></div>
        <div className="next-button absolute right-0 top-1/2 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-blue-400"></div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        loop={true}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        onSlideChange={slide => {
          const activeImage = images[slide.realIndex]
          setImage(activeImage)
        }}
        className="mt-4">
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <figure className="h-full">
              {
                <Image
                  src={image.src}
                  alt={image.alt ?? `Slide image ${index}`}
                  width={40}
                  height={60}
                  className="h-full object-contain"
                  onClick={() => setZoomImageUrl(image)}
                  onMouseOver={() => setZoomImageUrl(image)}
                />
              }
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BaseProduct

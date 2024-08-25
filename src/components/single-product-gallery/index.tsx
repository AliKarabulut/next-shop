'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ImageZoom from '@/components/image-zoom'
import cn from '@/utils/cn'

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

const SingleProductGallery = () => {
  const [image, setImage] = useState(images[0])

  const setZoomImageUrl = (image: { src: string; alt: string }) => {
    setImage(image)
  }
  return (
    <section id="product-image-gallery" className="product-image-gallery w-[400px]">
      <ImageZoom image={image} />
      <Swiper
        id="product-image-slider"
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
                  width={70}
                  height={105}
                  className={cn('h-full object-contain', {
                    'active-image': image.src === image.src,
                  })}
                  onClick={() => setZoomImageUrl(image)}
                  onMouseOver={() => setZoomImageUrl(image)}
                />
              }
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SingleProductGallery

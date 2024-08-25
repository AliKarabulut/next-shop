'use client'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type SwiperProps = {
  slides?: {
    id: string
    description: string
    imageUrl: string
    imageAlt?: string
  }[]
}

const HomeSwiper = ({ slides }: SwiperProps) => {
  console.log(slides)
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      className="home-swiper-wrapper">
      {slides?.map((slide, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="home-swiper-container">
            <div className="home-swiper-description" dangerouslySetInnerHTML={{ __html: slide.description }} />
            <div className="home-swiper-image-wrapper">
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt ?? `Slide image ${index}`}
                width={520}
                height={380}
                className="home-swiper-image"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSwiper

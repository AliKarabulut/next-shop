'use client'
import 'swiper/css'
import { Autoplay, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CategoryItem from '@/components/header/category/category-item'
import CameraIcon from '@/icons/camera'
import ComputerIcon from '@/icons/computer'
import GamepadIcon from '@/icons/gamepad'
import HeadphonesIcon from '@/icons/headphones'
import PhoneIcon from '@/icons/phone'
import TvIcon from '@/icons/tv'
import WatchIcon from '@/icons/watch'
import cn from '@/utils/cn'

type CategoryListType = {
  className?: string
}

const DummyMenuContent = [
  { name: 'Laptops & Computer', href: '/', icon: <ComputerIcon /> },
  { name: 'Cameras', href: '/', icon: <CameraIcon /> },
  { name: 'Smartphones & Tablets', href: '/', icon: <PhoneIcon /> },
  { name: 'Gaming', href: '/', icon: <GamepadIcon /> },
  { name: 'TV & Audio', href: '/', icon: <TvIcon /> },
  { name: 'Headphones', href: '/', icon: <HeadphonesIcon /> },
  { name: 'Smartwatches', href: '/', icon: <WatchIcon /> },
]

const CategoryList = ({ className }: CategoryListType) => {
  return (
    <Swiper
      modules={[Scrollbar, Autoplay]}
      slidesPerView="auto"
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: false,
      }}
      className={cn('w-full', className)}>
      {DummyMenuContent.map((badge, index) => (
        <SwiperSlide className="category-swiper-slide" key={index}>
          <CategoryItem name={badge.name} href={badge.href} icon={badge.icon} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CategoryList

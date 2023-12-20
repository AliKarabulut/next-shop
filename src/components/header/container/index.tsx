'use client'
import React, { useState, useEffect } from 'react'
import Search from '../search'
import ActionButtons from '../actions'
import CategoryList from '../category'

const HeaderContainer = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [isScrollSmall, setIsScrollSmall] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollY <= 94) {
      setIsScrollSmall(true)
    } else if (scrollY > 94) {
      setIsScrollSmall(false)
    }
  }, [scrollY])

  return (
    <div
      className={`group/container z-50 w-full bg-white max-md:py-2.5 ${
        !isScrollSmall ? '!fixed top-[-150px] animate-open shadow-md ' : ''
      }`}>
      <div className={`container mx-auto flex flex-col ${!isScrollSmall ? 'md:py-2.5' : 'gap-4 md:pt-8'}`}>
        <div className="flex w-full items-center justify-between gap-10">
          <div className="whitespace-nowrap text-3xl">E commerce</div>
          <Search />
          <ActionButtons className="max-md:hidden" />
        </div>
        <CategoryList className={!isScrollSmall ? 'h-0 transition-all group-hover/container:mt-4 group-hover/container:h-10' : 'h-fit'} />
      </div>
    </div>
  )
}

export default HeaderContainer

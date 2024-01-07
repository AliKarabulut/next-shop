'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { narrowedAction } from '@/store/admin/isNarrowed'
import ChevronDownIcon from '@/icons/admin/down'
import ChevronUpIcon from '@/icons/admin/up'
import Link from 'next/link'

import DotIcon from '@/icons/admin/dot'

type ButtonProps = {
  children: React.ReactNode
  text: string
  subMenuItems?: { item: string; href: string }[]
  href?: string
  isNarrowed: boolean
  isMobile: boolean
}

type StateProps = {
  isNarrowed: {
    isClicked: boolean
  }
}

const Button = ({ children, text, subMenuItems, href, isNarrowed, isMobile }: ButtonProps) => {
  const segment = useSelectedLayoutSegment()
  const [isActive, setIsActive] = useState<boolean>(segment === href || subMenuItems?.some(item => item.href === segment) ? true : false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const isClicked = useSelector((state: StateProps) => state.isNarrowed.isClicked)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsActive(segment === href || subMenuItems?.some(item => item.href === segment) ? true : false)
  }, [segment])

  const linkClickHandler = () => {
    isClicked && dispatch(narrowedAction.offNarrowed())
    isMobile && dispatch(narrowedAction.mobileToggle())
  }

  return (
    <>
      {subMenuItems ? (
        <>
          <div
            className={`group mb-2 flex cursor-pointer select-none  items-center gap-4 overflow-hidden rounded-lg py-3 text-sm duration-300 hover:bg-admin-secondary-light ${
              isActive || subMenuItems?.some(item => item.href === segment) ? 'bg-admin-secondary-light text-admin-secondary-main' : ''
            } ${!isNarrowed ? 'w-56 px-6' : 'w-11 px-3'}`}
            onClick={() => setIsActive(!isActive)}>
            {children}
            <span
              className={`whitespace-nowrap duration-300 ease-linear ${isActive ? 'font-medium' : 'font-normal'} ${
                isNarrowed ? 'w-0 overflow-hidden opacity-0' : 'w-32'
              }`}>
              {text}
            </span>
            {isActive ? <ChevronUpIcon className="ml-auto flex-shrink-0" /> : <ChevronDownIcon className="ml-auto" />}
          </div>
          <div className={`flex select-none overflow-hidden text-sm duration-300  ${!isNarrowed ? 'w-56 gap-3 ' : 'w-11 '}`}>
            <div className={`mb-2 h-auto w-px flex-shrink-0 bg-admin-primary-light duration-300  ${isNarrowed ? 'ml-2' : 'ml-8'}`} />
            <div
              style={{ maxHeight: isActive ? contentRef?.current?.scrollHeight + 'px' : 0 }}
              ref={contentRef}
              className={`flex w-full flex-col duration-300`}>
              {subMenuItems.map((subMenuItem, subIndex) => (
                <Link
                  href={`/admin/dashboard/${subMenuItem.href}`}
                  key={subIndex}
                  className={`group flex cursor-pointer items-center whitespace-nowrap rounded-lg py-3 ${
                    subMenuItem.href === segment && 'text-admin-secondary-main'
                  }`}
                  onClick={() => linkClickHandler()}>
                  <DotIcon
                    className={`flex-shrink-0 duration-300   ${subMenuItem.href === segment ? 'scale-150 text-admin-secondary-main' : ''} ${
                      isNarrowed ? 'hidden' : 'block'
                    }`}
                  />
                  <span
                    className={`px-2 duration-300 group-hover:text-admin-secondary-main  ${
                      subMenuItem.href === segment ? 'scale-125 text-admin-secondary-main' : ''
                    } ${isNarrowed ? 'block' : 'hidden'}`}>
                    {subMenuItem.item.charAt(0)}
                  </span>
                  <span
                    className={`group-hover:text-admin-secondary-main  ${isNarrowed ? 'w-0 overflow-hidden opacity-0' : 'w-40 pl-3'} ${
                      subMenuItem.href === segment ? ' text-admin-secondary-main' : ''
                    }`}>
                    {subMenuItem.item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={`/admin/dashboard/${href}`}
          className={`group mb-2 flex cursor-pointer select-none items-center gap-4 overflow-hidden rounded-lg py-3 text-sm duration-300 hover:bg-admin-secondary-light ${
            isActive ? 'bg-admin-secondary-light text-admin-secondary-main' : ''
          } ${!isNarrowed ? 'w-56 px-6' : 'w-11 px-3'}`}
          onClick={() => linkClickHandler()}>
          {children}
          <span
            className={`whitespace-nowrap  duration-300 ease-linear group-hover:text-admin-secondary-main ${
              isActive ? 'font-medium' : 'font-normal'
            } ${isNarrowed ? 'w-0 overflow-hidden opacity-0' : 'w-32'}`}>
            {text}
          </span>
        </Link>
      )}
    </>
  )
}

export default Button

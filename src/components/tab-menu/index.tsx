'use client'
import { Tab } from '@headlessui/react'

type TabMenuProps = {
  tabs: {
    title: string
  }[]
  className?: string
}

const TabMenu = ({ tabs, className }: TabMenuProps) => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className={`flex gap-4 ${className}`}>
        {tabs.map((tab, index) => (
          <Tab key={index} className="outline-0">{({ selected }) => <div className={`${selected ? 'border-b' : ''}`}>{tab.title}</div>}</Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}

export default TabMenu

'use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

import SearchIcon from '@/icons/search'
import XIcon from '@/icons/x'
import cn from '@/utils/cn'

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan']

const Search = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <>
      <div className="ml-auto block sm:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
        {isSearchOpen ? <XIcon /> : <SearchIcon />}
      </div>

      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <div className={cn('search-container mobile-search', { opened: isSearchOpen })}>
          <div className="search-input-container">
            <Combobox.Input onChange={event => setQuery(event.target.value)} className="search-input" placeholder="Search..." />
            <Combobox.Button type="submit" className="search-button">
              <SearchIcon />
            </Combobox.Button>
          </div>
          <Combobox.Options className="search-bar dropdown-border">
            {filteredPeople.length > 0 ? (
              filteredPeople.map(person => (
                <Combobox.Option key={person} value={person} className={({ active }) => `${active ? 'bg-site-yellow/20' : ''}`}>
                  {person}
                </Combobox.Option>
              ))
            ) : (
              <li>No results found for your search</li>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </>
  )
}

export default Search

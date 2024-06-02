'use client'
import { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'

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
            <ComboboxInput onChange={event => setQuery(event.target.value)} className="search-input" placeholder="Search..." />
            <ComboboxButton type="submit" className="search-button">
              <SearchIcon />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="search-bar dropdown-border">
            {filteredPeople.length > 0 ? (
              filteredPeople.map(person => (
                <ComboboxOption key={person} value={person} className={({ focus }) => `${focus ? 'bg-site-yellow/20' : ''}`}>
                  {person}
                </ComboboxOption>
              ))
            ) : (
              <li>No results found for your search</li>
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
    </>
  )
}

export default Search

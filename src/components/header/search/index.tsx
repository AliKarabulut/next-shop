'use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

import SearchIcon from '@/icons/search'

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan']

const Search = () => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="search-container">
        <div className="search-input-container ">
          <Combobox.Input onChange={event => setQuery(event.target.value)} className="search-input" placeholder="Search..." />
          <Combobox.Button type="submit" className="search-button">
            <SearchIcon />
          </Combobox.Button>
        </div>
        <Combobox.Options className="search-bar dropdown-border">
          {filteredPeople.map(person => (
            <Combobox.Option key={person} value={person} className={({ active }) => `${active ? 'bg-yellow/20' : ''}`}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default Search

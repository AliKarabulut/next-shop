import React, { useState } from 'react'
interface VariationOptionsProps {
  onSubmit: (data: { variation: string; options: string[] }) => void
}

const VariationOptions = ({ onSubmit }: VariationOptionsProps) => {
  const [variation, setVariation] = useState('')
  const [options, setOptions] = useState('')

  const handleVariationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVariation(event.target.value)
  }

  const handleOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Split the options string into an array of options
    const optionsArray = options.split(',')

    // Prepare the data to be sent in the POST request
    const data = {
      variation,
      options: optionsArray,
    }

    // Call the onSubmit callback with the data
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="variation">Variation:</label>
        <input type="text" id="variation" value={variation} onChange={handleVariationChange} />
      </div>
      <div>
        <label htmlFor="options">Options:</label>
        <input type="text" id="options" value={options} onChange={handleOptionsChange} />
      </div>
      <button type="submit">Create Variation Options</button>
    </form>
  )
}

export default VariationOptions

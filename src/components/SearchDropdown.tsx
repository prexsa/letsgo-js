import React, { useState } from 'react'
import './search-dropdown.css'

export interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
}

const SearchDropdown: React.FC<Props> = ({ options }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  /*const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]*/

  const filteredOptions = options.filter((option: { label: string }) => {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    setSearchTerm('') // clear the search term after selection
  }

  return (
    <div className='search-dropdown'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      {searchTerm && (
        <ul className='dropdown-list'>
          {filteredOptions.map((option: Option) => (
            <li key={option.value} onClick={() => handleOptionSelect(option)}>
              {option.label}
            </li>
          ))}
          {filteredOptions.length === 0 && <li>No matches...</li>}
        </ul>
      )}

      {selectedOption && (
        <div className='selected-option'>{selectedOption.label}</div>
      )}
    </div>
  )
}

export default SearchDropdown

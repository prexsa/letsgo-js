import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { searchSchema, SearchSchemaType } from './schema'

import SearchDropdown, { Option } from './SearchDropdown'

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

export const Destination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
  })

  const onSubmit = (data: SearchSchemaType) => {
    console.log({ data })
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'inline-flex' }}
      >
        <div
          style={{
            textAlign: 'left',
            display: 'block',
            margin: '0 10px 0 10px',
          }}
        >
          <label htmlFor='origin'>From</label>
          <br />
          <SearchDropdown options={options} />
          {/*<input
            type='text'
            id='origin'
            placeholder='origin'
            {...register('origin')}
          />*/}
          {errors.origin && <span>{errors.origin.message}</span>}
        </div>

        <div
          style={{
            textAlign: 'left',
            display: 'block',
            margin: '0 10px 0 10px',
          }}
        >
          <label htmlFor='destination'>Destination</label>
          <br />
          <input
            type='text'
            id='destination'
            placeholder='destination'
            {...register('destination')}
          />
          {errors.destination && <span>{errors.destination.message}</span>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

/*
const regions = [
  'North America',
  'Central America & The Carribeans',
  'Andean',
  'Brazil & Guianas',
  'Southern Cone',
  'Antarctica',
  'Nordic',
  'Europe & Russia',
  'Central Asia & Caucasus',
  'East Asia',
  'South East Asia',
  'Oceania',
  'South Asia',
  'Middle East & North Africa',
  'West Africa',
  'Southern & East Africa',
]
*/

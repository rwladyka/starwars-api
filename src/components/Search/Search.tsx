import SearchInput from 'components/BasicComponents/SearchInput'
import Select from 'components/BasicComponents/Select/Select'
import { useEffect, useState } from 'react'
import { search } from 'services/api'
import ResultsView from './ResultsView'

export type Result = {
  title?: string
  name?: string
  url: string
}

export type APIResponse = {
  count: number
  next?: string
  previous?: string
  results: Result[]
}

export const TIMEOUT = 400

let timeout: NodeJS.Timeout

const Search = () => {
  const [type, setType] = useState('')
  const [result, setResult] = useState<APIResponse>()
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<Result>()

  useEffect(() => {
    clearTimeout(timeout)

    if (!type || !value || (selected && !result)) return

    timeout = setTimeout(async () => {
      setIsLoading(true)
      const res = await search(type, value)
      setResult(res)
      setIsLoading(false)
    }, TIMEOUT)

    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  const handleSelectSearch = (selected: Result) => {
    setValue(selected.name || selected.title || '')
    setSelected(selected)
    setResult(undefined)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
      <SearchInput
        value={value}
        onChange={(value) => {
          setValue(value)
          setSelected(undefined)
        }}
        label="Search"
        placeholder="Type your search"
        style={{ width: '100%' }}>
        <ResultsView
          isLoading={isLoading}
          results={result?.results}
          onSelect={handleSelectSearch}
        />
      </SearchInput>
      <Select
        onChange={(value) => {
          setType(value)
          setResult(undefined)
        }}
        style={{ width: '300px' }}
        label="Search type"
        options={[
          { value: 'people', label: 'People' },
          { value: 'films', label: 'Films' },
          { value: 'planets', label: 'Planets' },
          { value: 'species', label: 'Species' },
          { value: 'starships', label: 'Starships' },
          { value: 'vehicles', label: 'Vehicles' },
        ]}
        firstOptionLabel="Choose one"
      />
    </div>
  )
}

export default Search

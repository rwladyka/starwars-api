import { CSSProperties, useState } from 'react'
import Container from '../Container/Container'
import './SearchInput.css'

type SearchInputProps = {
  onChange: (value: string) => void
  label: string
  placeholder: string
  style?: CSSProperties
}

const SearchInput = ({
  onChange,
  label,
  placeholder,
  style,
}: SearchInputProps) => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <div>
        <label htmlFor="search-input">{label}</label>
        <input
          style={style}
          id="search-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setValue(value)
            onChange(value)
          }}
          data-testid="search-input"
        />
      </div>
    </Container>
  )
}

export default SearchInput

import { CSSProperties, useEffect, useState } from 'react'
import Container from '../Container/Container'
import OutsideClick from '../OutisdeClick'
import './SearchInput.css'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  label: string
  placeholder: string
  style?: CSSProperties
  children?: JSX.Element
}

const SearchInput = ({
  value,
  onChange,
  label,
  placeholder,
  style,
  children,
}: SearchInputProps) => {
  const [showResults, setShowResults] = useState(false)

  const closeResults = () => setShowResults(false)

  useEffect(() => {
    setShowResults(!!children)
  }, [children])

  return (
    <Container>
      <div className="search-input-wrapper">
        <label htmlFor="search-input">{label}</label>
        <input
          style={style}
          id="search-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            onChange(value)
          }}
          data-testid="search-input"
        />
        {showResults && (
          <OutsideClick onClickOutside={closeResults}>
            <div onClick={closeResults} className="search-options">
              {children}
            </div>
          </OutsideClick>
        )}
      </div>
    </Container>
  )
}

export default SearchInput

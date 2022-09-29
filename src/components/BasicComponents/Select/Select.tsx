import { CSSProperties, useState } from 'react'
import OutsideClick from '../OutisdeClick'
import './Select.css'
import arrow from './up-arrow.svg'

type Option = {
  value: string
  label: string
}

type SelectProps = {
  label: string
  options: Option[]
  onChange: (value: string) => void
  firstOptionLabel?: string
  style?: CSSProperties
}

const Select = ({
  label,
  options,
  firstOptionLabel = '',
  style,
  onChange,
}: SelectProps) => {
  const [selected, setSelected] = useState<Option>()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="select select-none" style={style}>
      <label>{label}</label>
      <OutsideClick onClickOutside={() => setIsOpen(false)}>
        <>
          <div
            data-testid="select-box"
            className={`select-selector ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}>
            <span className={`${selected?.label ? 'has-selection' : ''}`}>
              {selected?.label || firstOptionLabel}
            </span>
            <img src={arrow} alt="arrow" />
          </div>
          {isOpen && (
            <div className="select-options">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSelected(option)
                    onChange(option.value)
                    setIsOpen(false)
                  }}>
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </>
      </OutsideClick>
    </div>
  )
}

export default Select

import { fireEvent, render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  test('should render search input', () => {
    render(<SearchInput onChange={jest.fn} label={'Search'} placeholder={''} />)
    expect(screen.getByText(/Search/i)).toBeInTheDocument()
  })

  test('should change input values', () => {
    render(<SearchInput onChange={jest.fn} label={'Search'} placeholder={''} />)
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Yoda' } })
    expect(input.value).toBe('Yoda')
  })
})

import { render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  test('should render search input', () => {
    render(
      <SearchInput
        value=""
        onChange={jest.fn}
        label={'Search'}
        placeholder={''}
      />,
    )
    expect(screen.getByText(/Search/i)).toBeInTheDocument()
  })
})

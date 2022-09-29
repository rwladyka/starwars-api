import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Select from './Select'

const mockOptions = [
  { value: 'people', label: 'People' },
  { value: 'films', label: 'Films' },
  { value: 'planets', label: 'Planets' },
  { value: 'species', label: 'Species' },
  { value: 'starships', label: 'Starships' },
  { value: 'vehicles', label: 'Vehicles' },
]

describe('<Select />', () => {
  test('should render select box', () => {
    render(
      <Select
        label="Search type"
        options={mockOptions}
        firstOptionLabel="Choose one"
      />,
    )
    expect(screen.getByText(/Choose one/i)).toBeInTheDocument()
  })

  test('should open option list', () => {
    render(
      <Select
        label="Search type"
        options={mockOptions}
        firstOptionLabel="Choose one"
      />,
    )
    const select = screen.getByTestId('select-box')
    fireEvent.click(select)

    expect(screen.getByText(mockOptions[0].label)).toBeInTheDocument()
    expect(screen.getByText(mockOptions[1].label)).toBeInTheDocument()
    expect(screen.getByText(mockOptions[2].label)).toBeInTheDocument()
    expect(screen.getByText(mockOptions[3].label)).toBeInTheDocument()
    expect(screen.getByText(mockOptions[4].label)).toBeInTheDocument()
    expect(screen.getByText(mockOptions[5].label)).toBeInTheDocument()
  })

  test('should select an option', async () => {
    render(
      <Select
        label="Search type"
        options={mockOptions}
        firstOptionLabel="Choose one"
      />,
    )
    const select = screen.getByTestId('select-box')
    fireEvent.click(select)

    const firstSelection = mockOptions[2].label
    const secondSelection = mockOptions[3].label

    fireEvent.click(screen.getByText(firstSelection))
    expect(screen.getByText(firstSelection)).toBeInTheDocument()
    expect(screen.queryByText(secondSelection)).not.toBeInTheDocument()

    fireEvent.click(select)

    fireEvent.click(screen.getByText(secondSelection))
    expect(screen.getByText(secondSelection)).toBeInTheDocument()
    expect(screen.queryByText(firstSelection)).not.toBeInTheDocument()
  })
})

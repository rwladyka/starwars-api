import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { mock, mockEmpty } from './mockData'
import Search, { TIMEOUT } from './Search'

const EMPTY_SEARCH = 'emptyData'

export const handlers = [
  rest.get('/api/people', (req, res, ctx) => {
    if (req.url.searchParams.get('search') === EMPTY_SEARCH) {
      return res(ctx.json(mockEmpty), ctx.delay(100))
    }

    return res(ctx.json(mock), ctx.delay(200))
  }),
]

describe('<Search />', () => {
  const server = setupServer(...handlers)

  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

  test('should render loading', async () => {
    render(<Search />)
    const select = screen.getByTestId('select-box')
    fireEvent.click(select)

    fireEvent.click(screen.getByText(/People/i))
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Yoda' } })

    await new Promise((r) => setTimeout(r, TIMEOUT + 50))

    expect(screen.getByTestId('rw-loading-test-id')).toBeInTheDocument()
  })

  test('should render empty search', async () => {
    render(<Search />)
    const select = screen.getByTestId('select-box')
    fireEvent.click(select)

    fireEvent.click(screen.getByText(/People/i))
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: EMPTY_SEARCH } })

    await new Promise((r) => setTimeout(r, TIMEOUT + 300))

    const empty = screen.getByTestId('search-empty-result')

    expect(empty).toBeInTheDocument()
  })

  test('should render autocomplete', async () => {
    render(<Search />)
    const select = screen.getByTestId('select-box')
    fireEvent.click(select)

    fireEvent.click(screen.getByText(/People/i))
    const input = (await screen.findByTestId(
      'search-input',
    )) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'darth' } })

    await new Promise((r) => setTimeout(r, TIMEOUT + 300))

    expect(await screen.findByText(/anakin/i)).toBeInTheDocument()
  })
})

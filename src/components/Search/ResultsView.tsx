import Loading from 'components/BasicComponents/Loading'
import Padding from 'components/BasicComponents/Padding'
import { Result } from './Search'

type ResultsViewProps = {
  results?: Result[]
  isLoading: boolean
  onSelect: (r: Result) => void
}

const ResultsView = ({ isLoading, results, onSelect }: ResultsViewProps) => {
  if (isLoading) {
    return (
      <Padding>
        <Loading />
      </Padding>
    )
  }

  if (results && !results?.length) {
    return (
      <div onClick={(e) => e.stopPropagation()} className="select-none">
        <Padding>
          <span data-testid="search-empty-result">
            Sorry, we did not found you search
          </span>
        </Padding>
      </div>
    )
  }

  return (
    <>
      {results?.map((r) => (
        <div key={r.url} onClick={() => onSelect(r)}>
          {r.name || r.title}
        </div>
      ))}
    </>
  )
}

export default ResultsView

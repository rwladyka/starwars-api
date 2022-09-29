import Container from 'components/BasicComponents/Container/Container'
import SearchInput from 'components/BasicComponents/SearchInput'
import Select from 'components/BasicComponents/Select/Select'
import Header from 'components/Header/Header'
import './App.css'

function App() {
  const handleInputCange = (value: string) => console.log(value)
  return (
    <div className="App">
      <Header />
      <Container
        style={{
          width: '800px',
        }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
          <SearchInput
            onChange={handleInputCange}
            label="Search"
            placeholder="Type your search"
            style={{ width: '100%' }}
          />
          <Select
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
      </Container>
    </div>
  )
}

export default App

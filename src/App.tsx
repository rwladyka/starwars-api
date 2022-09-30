import Container from 'components/BasicComponents/Container/Container'
import Header from 'components/Header/Header'
import Search from 'components/Search/Search'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Container
        style={{
          width: '100%',
        }}>
        <Search />
      </Container>
    </div>
  )
}

export default App

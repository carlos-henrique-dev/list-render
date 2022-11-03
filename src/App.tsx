import { useFetchCharacters } from './hooks/use-fetch-characters'
import { CharactersTable } from './components/table'
import { Header } from './components/header'

import './styles/index.css'
import { Store } from './store/table-store'

const store = new Store()

function App() {
  const { characters, fetchMore, reset } = useFetchCharacters()

  const handleRandomSelect = () => {
    if (characters.length) {
      const ID = Math.floor(Math.random() * (characters.length - 1 + 1) + 1)
      store.callSelectRow(ID)
    }
  }

  const handleFetchMore = () => fetchMore()
  const handleReset = () => reset()

  return (
    <div className="App">
      <Header onSelect={handleRandomSelect} onFetch={handleFetchMore} onReset={handleReset} />

      <CharactersTable items={characters} />
    </div>
  )
}

export default App

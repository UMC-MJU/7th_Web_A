import './App.css'
import Items from './components/Items'
import { MOVIES } from './mocks/movies.js'

function App() {
  const movies = MOVIES.results;

  return (
    <>
    <main>
      {movies.map((movie, _) => (
        <Items data={movie} />
      ))}
    </main>
    </>
  )
}

export default App

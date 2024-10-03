import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar></SearchBar>
    </>
  )
}

export default App

import './App.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CharactersList from './components/CharactersList/CharactersList'
import CharactersSearch from './components/CharactersSearch/CharactersSearch'
import { Link } from 'react-router-dom'
import { Container, Pagination, PaginationItem } from '@mui/material'
import { useParams } from 'react-router-dom'

const baseURL = 'https://rickandmortyapi.com/api/character/?page='

function App() {
  const [characters, setCharacters] = useState([])
  const [apiInfo, setApiInfo] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setCharacters([])
    setPage(value)
    setLoading(false)
  }

  useEffect(() => {
    axios.get(`${baseURL}${page}`).then((response) => {
      setCharacters(response.data.results)
      setApiInfo(response.data.info)
      setLoading(false)
    })
  }, [page])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Container sx={{ pt: 3, pb: 40 }} className="App">
        <CharactersSearch characters={characters} />
        <CharactersList characters={characters} />
        <div className="pagination">
          <Pagination
            page={page}
            count={apiInfo.pages}
            onChange={handleChange}
          />
        </div>
      </Container>
    </>
  )
}

export default App

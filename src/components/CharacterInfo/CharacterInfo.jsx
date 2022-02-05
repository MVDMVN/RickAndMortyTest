import './CharacterInfo.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

const baseURL = 'https://rickandmortyapi.com/api/character'

function CharacterInfo() {
  const { characterId } = useParams()
  const [character, setCharacter] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${baseURL}/${characterId}`).then((response) => {
      setCharacter(response.data)
      setLoading(false)
    })
  }, [characterId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container sx={{ pt: 3, pb: 40 }} className="App">
      <p>{character.name}</p>
      <img src={character.image} alt={`${character.name} Character`} />
      <p>{character.status}</p>
      <p>{character.species}</p>
    </Container>
  )
}

export default CharacterInfo

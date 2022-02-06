import './CharacterInfo.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

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
    <Container sx={{ pt: 3, pb: 40 }}>
      <Typography variant="h1" textAlign="center" mb="24px">
        {character.name}
      </Typography>
      <div className="character-info">
        <div className="character-details">
          <p>
            <b>Name:</b> {character.name}
          </p>
          <p>
            <b>Species:</b> {character.species}
          </p>
          <p>
            <b>Gender:</b> {character.gender}
          </p>
          <p>
            <b>Location:</b> {character.location.name}
          </p>
          <p>
            <b>Status:</b> {character.status}
          </p>
          <p>
            <b>Created:</b>{' '}
            {`
            ${character.created.substr(0, 10)} 
            ${character.created.substr(11, 8)}
            `}
          </p>
        </div>
        <div className="character-photo">
          <img src={character.image} alt={`${character.name} Character`} />
        </div>
      </div>
      <Typography variant="h3" mb="12px">
        Episodes:{' '}
      </Typography>
      <div className="episodes">
        {character.episode.map((item) => {
          return (
            <a href={item} key={item}>
              {item}
            </a>
          )
        })}
      </div>
    </Container>
  )
}

export default CharacterInfo

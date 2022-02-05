import './CharactersList.scss'
import React from 'react'
import CharactersItem from '../CharactersItem/CharactersItem'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

function CharactersList({ characters }) {
  return (
    <>
      <div className="container">
        <div className="characters">
          {characters.map((character) => {
            return (
              <Link
                className="character-link"
                to={`/character/${character.id}`}
                key={character.id}
              >
                <CharactersItem
                  name={character.name}
                  status={character.status}
                  key={character.id}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CharactersList

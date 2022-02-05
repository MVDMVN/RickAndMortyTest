import './CharactersSearch.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

function CharactersSearch({ characters }) {
  let navigate = useNavigate()
  return (
    <>
      <Autocomplete
        className="characters-search"
        id="characters-items"
        options={characters}
        renderInput={(params) => (
          <TextField {...params} label="Персонажи" variant="outlined" />
        )}
        getOptionLabel={(option) => option.name}
        onChange={(_event, character) => {
          navigate(`/character/${character.id}`)
        }}
        sx={{ mb: 3 }}
      />
    </>
  )
}

export default CharactersSearch

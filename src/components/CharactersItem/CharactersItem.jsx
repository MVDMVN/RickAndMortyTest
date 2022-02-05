import './CharactersItem.scss'
import React from 'react'
import { Grid, Typography } from '@mui/material'

function CharactersItem({ name, status }) {
  return (
    <Grid item>
      <div className="character-item">
        <Typography variant="body2" className="character-item-name">
          {name}
        </Typography>
        <Typography variant="body2" className="character-item-status">
          {status}
        </Typography>
      </div>
    </Grid>
  )
}

export default CharactersItem

import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'

export const Menu = () => {
  return (
    <>
      <h1>Slingo</h1>
      <Paper elevation={3} style={{margin: '1rem', padding: '1rem'}}>
        <p>Let's talk in ASL</p>
        <p>Choose an option:</p>
        <Box style={{display: 'flex', flexDirection: 'column', maxWidth: '400', alignItems: 'center', gap: '1rem'}}>
          {/* Camera icon */}
          <Link to={"/capture/"}>
            <Button variant="contained">Capture ASL</Button>
          </Link>
          {/* keyboard icon */}
          <Link to={"/translate/"}>
            <Button variant="contained">Translate ASL</Button>
          </Link>
        </Box>
      </Paper>
    </>
  )
}

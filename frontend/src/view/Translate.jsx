import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextareaAutosize, Select, MenuItem, Typography, FormControl, InputLabel } from '@mui/material'
import { LanguageSelect } from '../components/LanguageSelect'
import { Box } from '@mui/system'
import './Capture.css'

export const Translate = () => {

  const navigator = useNavigate();

  // const fetchVideos

  return (
    <>
      <Button onClick={() => {navigator(-1)}}>Go back</Button>
      Translate

      <Box style={{paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Typography>Translate from</Typography>
        <FormControl style={{width: '100%'}}>
          <LanguageSelect idName="Capture" />
        </FormControl>
        <TextareaAutosize minRows={3}></TextareaAutosize>
        <Button variant="contained">Translate to ASL</Button>
        <Box style={{border: '1px solid black', width: '640px', height: '360px'}}>
          <video id="deviceCamera" autoPlay playsInline></video>
        </Box>

      </Box>

    </>
  )
}

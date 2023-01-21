import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const Translate = () => {
  const navigator = useNavigate();

  return (
    <>
      <Button onClick={() => {navigator(-1)}}>Go back</Button>
      <div>Translate</div>
    </>
  )
}

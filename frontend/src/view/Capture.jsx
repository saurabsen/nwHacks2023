import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const Capture = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Button onClick={navigator(-1)}>Go back</Button>
      Capture
    </div>
  )
}

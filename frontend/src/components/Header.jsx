import React from 'react'
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'

export const Header = ({pageName}) => {
  const navigator = useNavigate();

  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      px: "1rem",
      my: "1rem",
    }}
  >
    <Box sx={{ width: "100px" }}>
      <Button
        onClick={() => {
          navigator('/');
        }}
      >
        <IoIosArrowBack />  Back
      </Button>
    </Box>
    <Typography
      sx={{ flexGrow: 1, fontWeight: "Bold", textTransform: "uppercase" }}
    >
      {pageName}
    </Typography>
    <Box sx={{ width: "100px" }}></Box>
  </Box>
)
}

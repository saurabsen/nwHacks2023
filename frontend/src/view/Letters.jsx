import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextareaAutosize,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material';
import { LetterSelect } from '../components/LetterSelect';
import { Box } from '@mui/system';
import './Capture.css';

export const Letters = () => {
  const navigator = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigator(-1);
        }}
      >
        Go back
      </Button>
      Translate a Letter
      <Grid container
        spacing={2}
        sm={12}
        sx={{
          mt: '1rem',
          px: '1rem',
        }}
      >
        <Grid item
          sm={12}
          md={6}
        >
          <Typography>
            Select a Letter to Translate
          </Typography>
          <FormControl style={{ width: '100%' }}>
            <LetterSelect idName='Capture' />
          </FormControl>
        </Grid>
        {/* <TextareaAutosize minRows={3}></TextareaAutosize>
        <Typography>English Translation</Typography>
        <TextareaAutosize minRows={3}></TextareaAutosize> */}
        <Grid item
          sm={12}
          md={6}
          sx={{
            border: '1px solid black',
            width: '100%',
            height: '240px',
          }}
        >
          <video
            id='deviceCamera'
            autoPlay
            playsInline
          ></video>
        </Grid>
        {/* <Button variant='contained'>Capture</Button> */}
      </Grid>
    </>
  );
};

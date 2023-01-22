import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
} from '@mui/material';
import { useState } from 'react';

export const LetterSelect = (props) => {
  const letterList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'X',
    'Y',
    'Z',
  ];

  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Letters
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Select a Letter'
            onChange={handleChange}
          >
            {letterList.map((key) => (
              <MenuItem value={key} key={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
} from '@mui/material';
import { useState } from 'react';

export const LanguageSelect = (props) => {
  const deepElLangDict = {
    EN: 'English (unspecified variant for backward compatibility; please select EN-GB or EN-US instead)',
    'EN-GB': 'English (British)',
    'EN-US': 'English (American)',
    BG: 'Bulgarian',
    CS: 'Czech',
    DA: 'Danish',
    DE: 'German',
    EL: 'Greek',
    ES: 'Spanish',
    ET: 'Estonian',
    FI: 'Finnish',
    FR: 'French',
    HU: 'Hungarian',
    ID: 'Indonesian',
    IT: 'Italian',
    JA: 'Japanese',
    LT: 'Lithuanian',
    LV: 'Latvian',
    NL: 'Dutch',
    PL: 'Polish',
    PT: 'Portuguese (unspecified variant for backward compatibility; please select PT-BR or PT-PT instead)',
    'PT-BR': 'Portuguese (Brazilian)',
    'PT-PT':
      'Portuguese (all Portuguese varieties excluding Brazilian Portuguese)',
    RO: 'Romanian',
    RU: 'Russian',
    SK: 'Slovak',
    SL: 'Slovenian',
    SV: 'Swedish',
    TR: 'Turkish',
    UK: 'Ukrainian',
    ZH: 'Chinese (simplified)',
  };

  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Age
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Age'
            onChange={handleChange}
          >
            {Object.keys(deepElLangDict).map((key) => (
              <MenuItem value={key} key={key}>
                {deepElLangDict[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

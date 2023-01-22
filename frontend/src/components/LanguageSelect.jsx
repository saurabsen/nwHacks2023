import React, { useEffect } from 'react';
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

  const [langCode, setLangCode] = useState('');

  const { label, sourceText, sourceLang, translateText } = props;

  const handleChange = (e) => {
    setLangCode(e.target.value)
  }

  useEffect(() => {
    console.log(langCode)

    const translate = async () => {
      const res = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'auth_key': '1457cf22-a7b4-548b-c3a9-8b38e6f1b29b:fx',
          'text': sourceText,
          'target_lang': langCode,
          'source_lang': sourceLang
        }),
      })
      
      const data = await res.json()
      translateText(data.translations[0].text)
    }

    if (sourceText) {
      translate()
    }
  }, [langCode, sourceText, sourceLang, translateText])

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{ label || 'Language' }</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langCode}
            label={ label || 'Language' }
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

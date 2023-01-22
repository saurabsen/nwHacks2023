import React from 'react'
import { Select, MenuItem, InputLabel, Box, FormControl } from '@mui/material'
import { useState, useEffect } from 'react'

export const LanguageSelect = (props) => {
  const deepElLangDict = {
    EN: "English",
    BG: "Bulgarian",
    ZH: "Chinese (simplified)",
    CS: "Czech",
    DA: "Danish",
    DE: "German",
    EL: "Greek",
    ES: "Spanish",
    ET: "Estonian",
    FI: "Finnish",
    FR: "French",
    HU: "Hungarian",
    ID: "Indonesian",
    IT: "Italian",
    JA: "Japanese",
    LT: "Lithuanian",
    LV: "Latvian",
    NL: "Dutch",
    PL: "Polish",
    PT: "Portuguese",
    RO: "Romanian",
    RU: "Russian",
    SK: "Slovak",
    SL: "Slovenian",
    SV: "Swedish",
    TR: "Turkish",
    UK: "Ukrainian",
  }

  const [langCode, setLangCode] = useState('');

  const { label, sourceText, sourceLang, translateText, targetLang } = props;

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
          'auth_key': process.env.REACT_APP_DEEPL_API_KEY,
          'text': sourceText,
          'target_lang': targetLang || langCode,
          'source_lang': sourceLang || langCode
        }),
      })
      
      const data = await res.json()
      translateText(data.translations[0].text)
    }

    if (sourceText) {
      translate()
    }
  }, [langCode, sourceText, sourceLang, translateText, targetLang])

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
            {
              Object.keys(deepElLangDict).map((key) =>
                <MenuItem value={key} key={key}>{deepElLangDict[key]}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </Box>

    </>
  )
}

import React from 'react'
import { Select, MenuItem } from '@mui/material'

export const LanguageSelect = () => {
  const deepElLangDict = {
    EN: "English (unspecified variant for backward compatibility; please select EN-GB or EN-US instead)",
    "EN-GB": "English (British)",
    "PT-BR": "Portuguese (Brazilian)",
    "PT-PT": "Portuguese (all Portuguese varieties excluding Brazilian Portuguese)",
    "EN-US": "English (American)",
    BG: "Bulgarian",
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
    PT: "Portuguese (unspecified variant for backward compatibility; please select PT-BR or PT-PT instead)",
    RO: "Romanian",
    RU: "Russian",
    SK: "Slovak",
    SL: "Slovenian",
    SV: "Swedish",
    TR: "Turkish",
    UK: "Ukrainian",
    ZH: "Chinese (simplified)",
  }

  return (
    <Select label="Select language" value="default">
      <MenuItem value="default">Select Language</MenuItem>
      <MenuItem>English</MenuItem>
      <MenuItem>Chinese</MenuItem>
    </Select>
  )
}

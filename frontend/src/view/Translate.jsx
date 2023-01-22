import React, { useState, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextareaAutosize, Select, MenuItem, Typography, FormControl, InputLabel } from '@mui/material'
import { LanguageSelect } from '../components/LanguageSelect'
import { Box } from '@mui/system'
import './Capture.css'
import { useEffect } from 'react'
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from "reactjs-video-playlist-player";

import './Translate.css';

export const Translate = () => {
  const [sourceText, setSourceText] = useState("")
  const [translatedText, settranslatedText] = useState("")
  const [translatedTextArray, setTranslatedTextArray] = useState([])
  const [videoArray, setVideoArray] = useState([])
  const [runPlayer, setRunPlayer] = useState(false)

  const navigator = useNavigate();

  const translateText = (text) => {
    settranslatedText(text);
  }

  const translateToASL = () => {
    setRunPlayer(false)
    const fetchVideos = async (text) => {
      const res = await fetch(`${process.env.REACT_APP_HOST_BACKEND}/api/webscrape/${text}`);
      const data = await res.json();

      setVideoArray(current => [{
        thumbnail: 'https://via.placeholder.com/500/FFA500/FFFFFF',
        url: data.video_url,
        imgAlt: 'Not found'
      }, ...current]);
    }

    for (let text of translatedTextArray) {
      fetchVideos(text);
    }

    setTimeout(() => {
      setRunPlayer(true)
    }, 1000)
  }

  const [currentVideo, setCurrentVideo] = useState(0);
  const vidRef = createRef(null);

  const params = {
    videos: videoArray,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: '',
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
  };

  useEffect(() => {
    const words = translatedText.split(" ").filter(w => w !== '')
    setTranslatedTextArray(words)
    setVideoArray([])
  }, [translatedText])

  return (
    <>
      <Button
        onClick={() => {
          navigator(-1);
        }}
      >
        Go back
      </Button>
      Translate

      <Box style={{paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <FormControl style={{width: '100%'}}>
          <LanguageSelect idName="Capture" label="Source Language" sourceText={sourceText} targetLang="EN" translateText={translateText} />
        </FormControl>
        <TextareaAutosize minRows={3} onChange={(e) => setSourceText(e.target.value)} value={sourceText}></TextareaAutosize>
        <Button variant="contained" onClick={translateToASL}>Translate to ASL</Button>
        <TextareaAutosize minRows={3} value={translatedText}></TextareaAutosize>
        {runPlayer &&
          <Playlist playlistParams={params} />
        }
        {/* {videoArray.map((video, i) => 
          <Box key={i} style={{border: '1px solid black', width: '640px', height: '360px'}}>
            <video autoPlay playsInline controls>
              <source src={video} />
            </video>
          </Box>
        )} */}
      </Box>

    </>
  );
};

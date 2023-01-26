import React, { useState, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextareaAutosize,  FormControl, Grid, Typography } from '@mui/material'
import { LanguageSelect } from '../components/LanguageSelect'
import { Header } from '../components/Header'
import { Box } from '@mui/system'
import './Capture.css'
import { useEffect } from 'react'
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from "reactjs-video-playlist-player";
import { AiOutlineInfoCircle } from 'react-icons/ai'

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
      <Header pageName="Translate to Sign Language" />

      <Grid container xs={12} sx={{px: '1rem'}}>
        <Grid item xs={12} md={5} sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          pr: '1rem',
          pb: {xs: '3rem', md: 0}
        }}>
          <FormControl style={{width: '100%'}}>
            <LanguageSelect idName="Capture" label="Source Language" sourceText={sourceText} targetLang="EN" translateText={translateText} />
          </FormControl>
          <TextareaAutosize minRows={3} onChange={(e) => setSourceText(e.target.value)} value={sourceText}></TextareaAutosize>
          <Button variant="contained" onClick={translateToASL}>Translate to ASL</Button>
          <TextareaAutosize readOnly={true} minRows={3} value={translatedText} style={{backgroundColor: '#dfdfdf'}}></TextareaAutosize>

        </Grid>
        <Grid item xs={12} md={7} sx={{
          backgroundColor: '#e1e9f9',
          borderRadius: '10px',
          py: '1rem',
          mr: {xs: '1rem', md: 0}
        }}>
          {runPlayer ?
            <Playlist playlistParams={params} /> :
            <Box sx={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
              <Box>
                <Typography sx={{fontSize: '2rem'}}>
                  <AiOutlineInfoCircle />
                </Typography>
                <Box sx={{width: 'fit-content', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                  <Typography>
                    1. Select language from drop down
                  </Typography>
                  <Typography>
                    2. Type message in source language
                  </Typography>
                  <Typography>
                    3. Press "Translate to ASL"
                  </Typography>
                </Box>
              </Box>
            </Box>
          }
          {/* {videoArray.map((video, i) => 
            <Box key={i} style={{border: '1px solid black', width: '640px', height: '360px'}}>
              <video autoPlay playsInline controls>
                <source src={video} />
              </video>
            </Box>
          )} */}
        </Grid>
      </Grid>

    </>
  );
};

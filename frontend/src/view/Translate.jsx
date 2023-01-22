import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextareaAutosize,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Grid
} from "@mui/material";
import { LanguageSelect } from "../components/LanguageSelect";
import { Box } from "@mui/system";
import "./Capture.css";

export const Translate = () => {
  const [sourceText, setSourceText] = useState("");

  const navigator = useNavigate();

  // const fetchVideos

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
      <Grid
        container
        md={12}
        spacing={2}
        sx={{
          px: '1rem'
        }}
      >
        <Grid item sm={12} md={6} sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <Box>
            <Typography>Translate from</Typography>
            <FormControl style={{ width: "100%" }}>
              <LanguageSelect
                idName="Capture"
                sourceText={sourceText}
                targetLang="EN"
              />
            </FormControl>
            <TextareaAutosize minRows={3} style={{width: '100%'}}></TextareaAutosize>
          </Box>
          <Box>
            <Typography>English translation</Typography>
            <TextareaAutosize minRows={3} style={{width: '100%'}}></TextareaAutosize>
          </Box>
          <Button variant="contained">Translate to ASL</Button>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            sx={{ border: "1px solid black", width: "100%", minHeight: "360px" }}
          >
            <video id="deviceCamera" autoPlay playsInline></video>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

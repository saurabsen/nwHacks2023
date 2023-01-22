import React, { useRef, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, TextareaAutosize, Select, MenuItem, Typography, FormControl, InputLabel, Grid } from '@mui/material'
import { LanguageSelect } from '../components/LanguageSelect'
import { Box } from '@mui/system'
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawRect } from '../utilities'

import './Capture.css'

export const Capture = () => {

  const navigator = useNavigate();

  // CAMERA AND TENSORFLOW

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    // https://tensorflownsw.s3.us-east.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel(
      "https://tensorflownsw.s3.us-east.cloud-object-storage.appdomain.cloud/model.json"
    );
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };
  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      console.log(obj);
      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });
      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };
  useEffect(() => {
    runCoco();
  }, []);

  return (
    <>
      <Button onClick={() => {navigator(-1)}}>Go back</Button>
      Capture
      <Grid container sx={{width: '100%', paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Grid item md={6} sx={{border: '1px solid black', width: '640px', minHeight: '480px'}}>
          <Box sx={{position: 'relative'}}>
            <Webcam
              ref={webcamRef}
              muted={true}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
            }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 8,
                width: 640,
                height: 480,
              }}
            />

          </Box>
        </Grid>
        <Grid item md={6}>
          <Typography>English Translation</Typography>
          <TextareaAutosize minRows={3}></TextareaAutosize>
          <FormControl style={{width: '100%'}}>
            <LanguageSelect idName="Capture" />
          </FormControl>
          <Typography>Translated</Typography>
          <TextareaAutosize minRows={3}></TextareaAutosize>

        </Grid>
      </Grid>

    </>
  )
}

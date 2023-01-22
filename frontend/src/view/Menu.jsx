import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import Logo from "../assets/new_logo.svg";

export const Menu = () => {
  return (
    <>
      <Box sx={{width: '300px', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Slingo</h1>
        <img src={Logo} alt="Slingo logo" style={{width: '200px'}} />
      </Box>
      <Paper elevation={3} sx={{ margin: "1rem", padding: "1rem", maxWidth: '500px', mx: 'auto' }}>
        <p>Let's talk in ASL</p>
        <p>Choose an option:</p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Camera icon */}
          <Link to={"/capture/"} style={{width: '100%', textDecoration: 'none'}}>
            <Button variant="contained" sx={{width: '100%'}}>Capture ASL</Button>
          </Link>
          {/* keyboard icon */}
          <Link to={"/translate/"} style={{width: '100%', textDecoration: 'none'}}>
            <Button variant="contained" sx={{width: '100%'}}>Translate ASL</Button>
          </Link>
          <Link to={"/letters/"} style={{width: '100%', textDecoration: 'none'}}>
            <Button variant="contained" sx={{width: '100%'}}>Letters to ASL</Button>
          </Link>
        </Box>
      </Paper>
    </>
  );
};

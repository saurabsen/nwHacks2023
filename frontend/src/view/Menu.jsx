import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import Logo from "../assets/new_logo.svg";
import "../assets/font.css";

export const Menu = () => {
  return (
    <Box sx={{mx: {xs: '1rem', sm: 'auto'}}}>
      <Box
        sx={{
          width: "300px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: '"Chela One", cursive',
            fontSize: "4rem",
            margin: "0",
            marginTop: "2rem",
          }}
        >
          Slingo
        </h1>
        <img src={Logo} alt="Slingo logo" style={{ width: "200px" }} />
      </Box>
      <Paper
        elevation={3}
        sx={{ margin: "1rem", padding: "1rem", maxWidth: "500px", mx: "auto" }}
      >
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
          <Link
            to={"/capture/"}
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Button variant="contained" sx={{ width: "100%" }}>
              Record ASL
            </Button>
          </Link>
          <Link
            to={"/translate/"}
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Button variant="contained" sx={{ width: "100%" }}>
              Translate ASL
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

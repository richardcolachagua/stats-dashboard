import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const FAQ = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#004687",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        HOW I BUILT THIS PAGE
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Built with: (Insert images here)
            </Typography>
            <img
              src="stats-dashboard/public/assets/Visual_Studio_Code.svg.png"
              alt="vs-code"
            />
            <img src="stats-dashboard/assets/axios_logo.png" alt="axios" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              API Used: MLB Sport Live Data API (insert images here)
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          opacity: 0,
          animation: "fadeIn 1s ease-in-out forwards",
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          padding: "1rem", // Moved outside @keyframes fadeIn
          borderRadius: "16px", // Moved outside @keyframes fadeIn
          width: "600px", // Moved outside @keyframes fadeIn
          height: "300px", // Moved outside @keyframes fadeIn
          marginTop: "2rem", // Moved outside @keyframes fadeIn
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#004687",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          An MLB Dashboard that renders Player and Team Information. The purpose
          of the dashboard was to gain an understanding of how to render
          baseball stats and Information.
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQ;

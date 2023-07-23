import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllPlayers() {
  const [playerId, setPlayerId] = useState();
  const [allPlayers, setAllPlayers] = useState();
  const [buttonClicked, setButtonClicked] = useState();

  useEffect(() => {
    fetchPlayerProfile(allPlayers);
  }, [allPlayers]);

  useEffect(() => {
    if (buttonClicked) {
    }
  }, [buttonClicked, playerId]);
  async function fetchPlayerProfile(allPlayers) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-player-listing/v1/data",
      params: { id: playerId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data && response.data) {
        const {
          firstName,
          lastName,
          fullName,
          displayWeight,
          displayHeight,
          age,
          dateOfBirth,
          debutYear,
        } = response.data;

        const allPlayerData = {
          firstName,
          lastName,
          fullName,
          displayWeight,
          displayHeight,
          age,
          dateOfBirth,
          debutYear,
        };
        setAllPlayers(allPlayerData);
      } else {
        console.error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(error);
    }

    if (!buttonClicked) {
      return <CircularProgress />;
    }
    const handlePlayerChange = () => {
      const newPlayerId = playerId;
      setPlayerId(newPlayerId);
    };

    return (
      <Box
        sx={{
          opacity: 0,
          animation: "fadeIn 1s ease-in-out forwards",
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      >
        <Box sx={{ opacity: 0 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#004687" }}
          >
            All Players
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            First Name {allPlayers.firstName}
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Last Name {allPlayers.lastName}
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Full Name {allPlayers.fullName}
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            {allPlayers.displayWeight}
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Height {allPlayers.displayHeight}
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Weight {allPlayers.displayWeight}
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Age {allPlayers.age}
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Date of Birth {allPlayers.dateOfBirth}
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Debut Year {allPlayers.debutYear}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#E81828" }}
          onClick={handlePlayerChange}
        >
          Change Player
        </Button>
      </Box>
    );
  }
}

export default AllPlayers;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function PlayerInfo() {
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    fetchPlayerProfile();
  }, []);
  async function fetchPlayerProfile() {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-player-info/v1/data",
      params: { id: "32045" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data) {
        const { firstName, lastName, position, height, weight } = response.data;

        const playerData = {
          firstName,
          lastName,
          position,
          height,
          weight,
        };

        setPlayerInfo(playerData);
      } else {
        console.error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!playerInfo) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h2" fontWeight="bold">
        Player Info
      </Typography>
      <Typography variant="h6">
        Name: {playerInfo.firstName} {playerInfo.lastName}
      </Typography>
      <Typography variant="h6">Position: {playerInfo.position.name}</Typography>
      <Typography variant="h6">Height: {playerInfo.height}</Typography>
      <Typography variant="h6">Weight: {playerInfo.weight}</Typography>
    </Box>
  );
}

export default PlayerInfo;

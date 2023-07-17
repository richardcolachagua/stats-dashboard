import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState();

  useEffect(() => {
    fetchPlayerProfile(playerId);
  }, [playerId]);
  async function fetchPlayerProfile(playerId) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-player-info/v1/data",
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
      }
    } catch (error) {
      console.log(error);
    }
    return (
      <Box>
        <Typography variant="h2" fontWeight="bold">
          All Team
        </Typography>
        <Typography variant="h6"></Typography>
        <Typography variant="h6"></Typography>
        <Typography variant="h6"></Typography>
      </Box>
    );
  }
}

export default AllPlayers;

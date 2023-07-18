import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState();

  useEffect(() => {
    fetchPlayerProfile(allPlayers);
  }, [allPlayers]);
  async function fetchPlayerProfile(allPlayers) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-player-listing/v1/data",
      params: { id: "1" },
      headers: {
        "X-RapidAPI-Key": "b3dd72f6dbmsh95bbf8a55ef2b53p190f0fjsn0dd538ebb8d7",
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
          displayName,
          shortName,
          weight,
          displayWeight,
          height,
          displayHeight,
          age,
          dateOfBirth,
          debutYear,
        } = response.data;

        const AllPlayerData = {
          firstName,
          lastName,
          fullName,
          displayName,
          shortName,
          weight,
          displayWeight,
          height,
          displayHeight,
          age,
          dateOfBirth,
          debutYear,
        };
        setAllPlayers();
      } else {
        console.error();
      }
    } catch (error) {
      console.error(error);
    }

    return (
      <Box sx={{}}>
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

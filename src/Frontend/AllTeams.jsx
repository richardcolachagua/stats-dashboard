import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllTeams() {
  const [teamId, setTeamId] = useState();
  const [allTeams, setAllTeams] = useState();

  useEffect(() => {
    fetchTeamProfile(teamId);
  }, [teamId]);
  async function fetchTeamProfile(teamId) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-team-listing/v1/data",
      params: { id: teamId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data && response.data.team) {
        const { displayName, location, color } = response.data.team;

        const teamData = {
          displayName,
          location,
          color,
        };

        setAllTeams(teamData);
      } else {
        console.error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!allTeams) {
    return <CircularProgress />;
  }
  const handlePlayerChange = () => {
    const newTeamId = "12345";
    setTeamId(newTeamId);
  };

  return (
    <Box>
      <Typography variant="h2" fontWeight="bold">
        Team Info
      </Typography>
      <Typography variant="h6">Display Name: {allTeams.displayName}</Typography>
      <Typography variant="h6">Location: {allTeams.location}</Typography>
      <Typography variant="h6">Color: {allTeams.color}</Typography>
      <Button variant="contained" onClick={handlePlayerChange}>
        Change Player
      </Button>
    </Box>
  );
}

export default AllTeams;

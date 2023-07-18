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
        //check if the 'team' property is present in the response data
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
  const handleTeamChange = () => {
    const newTeamId = teamId;
    setTeamId(newTeamId);
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
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#004687" }}
      >
        Team Info
      </Typography>
      <Typography sx={{ fontSize: "1.2rem" }}>
        Display Name: {allTeams.displayName}
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        Location: {allTeams.location}
      </Typography>
      <Typography sx={{ fontSize: "1.2rem" }}>
        Color: {allTeams.color}
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "1rem", backgroundColor: "#E81828" }}
        onClick={handleTeamChange}
      >
        Change Team
      </Button>
    </Box>
  );
}

export default AllTeams;

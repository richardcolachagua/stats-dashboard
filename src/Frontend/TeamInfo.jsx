import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function TeamInfo() {
  const [teamInfo, setTeamInfo] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchTeamProfile("1");
  }, []);

  useEffect(() => {
    if (buttonClicked) {
    }
  }, [buttonClicked, teamInfo]);

  async function fetchTeamProfile(teamId) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-team-info/v1/data",
      params: { id: teamId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data) {
        const {
          displayName,
          clubhouse,
          logo,
          recordSummary,
          seasonSummary,
          standingSummary,
        } = response.data.team;

        const teamData = {
          displayName,
          clubhouse,
          logo,
          recordSummary,
          seasonSummary,
          standingSummary,
        };

        setTeamInfo(teamData);
      } else {
        console.error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!buttonClicked) {
    return (
      <Button variant="contained" onClick={() => setButtonClicked(true)}>
        Load Player Info
      </Button>
    );
  }

  function handleTeamChange(teamId) {
    fetchTeamProfile(teamId);
  }
  if (!teamInfo) {
    return <CircularProgress />;
  }

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
        <Typography variant="h2" fontWeight="bold">
          Team Info
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
        <Typography variant="h6">
          Display Name: {teamInfo.displayName}
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
        <Typography variant="h6">Clubhouse: {teamInfo.clubhouse}</Typography>
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
        <Typography variant="h6">Logo: {teamInfo.logo}</Typography>
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
        <Typography variant="h6">
          Record Summary: {teamInfo.recordSummary.summary}
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
        <Typography variant="h6">
          Season Summary: {teamInfo.seasonSummary.summary}
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
        <Typography variant="h6">
          Standing Summary: {teamInfo.standingSummary.summary}
        </Typography>
      </Box>
      <Button variant="contained" onClick={() => handleTeamChange("2")}>
        Change Team
      </Button>
    </Box>
  );
}

export default TeamInfo;

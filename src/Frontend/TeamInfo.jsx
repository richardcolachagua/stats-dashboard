import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function TeamInfo() {
  // Added state variables loading and error to handle the loading state and
  // store any error messages that occur during API calls.

  const [teamInfo, setTeamInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchTeamProfile("1");
  }, []);

  //empty block no logic in useffect

  // useEffect(() => {
  //   if (buttonClicked) {
  //   }
  // }, [buttonClicked, teamInfo]);

  async function fetchTeamProfile(teamId) {
    setLoading(true);
    setError(null);
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-team-info/v1/data",
      params: { id: teamId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    // In the try-catch block, set loading to false after the API call is completed,
    // whether it was successful or not.
    // If there is missing data or an error in the API response, set the error state
    // accordingly to display a user-friendly message.

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data && response.data.team) {
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
        setLoading(false);
      } else {
        setError("Error: Missing data in the API response");
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurered while fetching data from the API");
      setLoading(false);
    }
  }

  // if (!buttonClicked) {
  //   return (
  //     <Button variant="contained" onClick={() => setButtonClicked(true)}>
  //       Load Player Info
  //     </Button>
  //   );
  // }

  function handleTeamChange(teamId) {
    fetchTeamProfile(teamId);
  }
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography varaint="body1">{error}</Typography>;
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

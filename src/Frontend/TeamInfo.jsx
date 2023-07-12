import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function TeamInfo() {
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    fetchTeamProfile();
  }, []);
  async function fetchTeamProfile() {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-team-info/v1/data",
      params: { id: "1" },
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
        } = response.data;

        const teamData = {
          displayName,
          clubhouse,
          logo,
          recordSummary,
          seasonSummary,
          standingSummary,
        };

        setTeamInfo(teamData);
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (!teamInfo) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h2" fontWeight="bold">
        Team Info
      </Typography>
      <Typography variant="h6">Display Name: {teamInfo.displayName}</Typography>
      <Typography variant="h6">Clubhouse: {teamInfo.clubhouse}</Typography>
      <Typography variant="h6">Logo: {teamInfo.logo}</Typography>
      <Typography variant="h6">
        Record Summary: {teamInfo.recordSummary}
      </Typography>
      <Typography variant="h6">
        Season Summary: {teamInfo.seasonSummary}
      </Typography>
      <Typography variant="h6">
        Standing Summary: {teamInfo.standingSummary}
      </Typography>
    </Box>
  );
}

export default TeamInfo;

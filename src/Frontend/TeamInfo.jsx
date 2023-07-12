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
        "X-RapidAPI-Key": "b3dd72f6dbmsh95bbf8a55ef2b53p190f0fjsn0dd538ebb8d7",
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data) {
        const { teamName } = response.data;
        const teamData = {
          teamName,
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

  return <Box></Box>;
}

export default TeamInfo;

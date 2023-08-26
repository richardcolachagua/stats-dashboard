import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllTeams() {
  const [teamId, setTeamId] = useState();
  const [allTeams, setAllTeams] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchTeamProfile(teamId);
        setAllTeams(response);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data from the API");
        setLoading(false);
      }
    }
    fetchData();
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

      if (response.data && response.data.team) {
        const { displayName, location, color } = response.data.team;
        const teamData = {
          displayName,
          location,
          color,
        };
        return teamData;
      } else {
        throw new Error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(
        "Error fetching all teams:",
        error.response || error.message
      );
      throw new Error("An error occurred while fetching data from the API");
    }
  }

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  const handleTeamChange = () => {
    const newTeamId = ""; // New team ID to fetch
    setTeamId(null); // Clear existing data
    setLoading(true); // Show loading indicator
    fetchTeamProfile(newTeamId); // Fetch new team data
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
          Team Info
        </Typography>
      </Box>
      {allTeams && (
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
            Display Name: {allTeams.displayName}
          </Typography>
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
            <Typography sx={{ fontStyle: "italic" }}>
              Location: {allTeams.location}
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
              Color: {allTeams.color}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", backgroundColor: "#E81828" }}
            onClick={handleTeamChange}
          >
            Change Team
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default AllTeams;

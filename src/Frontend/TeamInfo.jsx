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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchTeamProfile(); // Fetch team profile data
        setTeamInfo(response);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data from the API");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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

    // In the try-catch block, set loading to false after the API call is completed,
    // whether it was successful or not.
    // If there is missing data or an error in the API response, set the error state
    // accordingly to display a user-friendly message.

    try {
      const response = await axios.request(options); // Make API request
      console.log(response.data);

      if (response.data && response.data.team) {
        // Extract required team information from the API response

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
        return teamData;
      } else {
        throw new Error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(
        "Error fetching team profile",
        error.response || error.message
      );
      throw new Error("An error occurered while fetching data from the API");
    }
  }

  if (loading) {
    return <CircularProgress />; // Display loading indicator
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>; // Display error message
  }

  const handleTeamChange = () => {
    const newTeamId = "3"; // New team ID to fetch
    setTeamInfo(null); // Clear existing data
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
      <Box
        sx={{
          opacity: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#004687" }}
        >
          Team Info
        </Typography>
      </Box>
      {teamInfo && (
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
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h6">
              Display Name: {teamInfo.displayName}
            </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h6">
              Clubhouse: {teamInfo.clubhouse}
            </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h6">Logo: {teamInfo.logo}</Typography>
          </Box>

          <Box
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h6">
              Record Summary: {teamInfo.recordSummary.summary}
            </Typography>
          </Box>

          <Box
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h6">
              Season Summary: {teamInfo.seasonSummary.summary}
            </Typography>
          </Box>

          <Box
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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
      )}
    </Box>
  );
}

export default TeamInfo;

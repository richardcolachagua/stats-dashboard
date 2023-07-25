import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function AllTeams() {
  // Added state variables loading and error to handle the loading state and
  // store any error messages that occur during API calls.

  const [teamId, setTeamId] = useState();
  const [allTeams, setAllTeams] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  // const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchTeamProfile(teamId);
  }, [teamId]);

  // useEffect(() => {
  //   if (buttonClicked) {
  //   }
  // }, [buttonClicked, teamId]);

  async function fetchTeamProfile(teamId) {
    setLoading(true);
    setError(null);
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-team-listing/v1/data",
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
        //check if the 'team' property is present in the response data
        const { displayName, location, color } = response.data.team;

        const teamData = {
          displayName,
          location,
          color,
        };

        setAllTeams(teamData);
        setLoading(false);
      } else {
        setError("Error: Missing data in the API response");
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred while fetching data from the API");
    }
  }

  // if (!buttonClicked) {
  //   return (
  //     <Button variant="contained" onClick={() => setButtonClicked(true)}>
  //       Load Team Info
  //     </Button>
  //   );
  // }

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
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
          Display Name: {allTeams.displayName}
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
  );
}

export default AllTeams;

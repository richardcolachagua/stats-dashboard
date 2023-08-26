import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function PlayerInfo() {
  // Added state variables loading and error to handle the loading state and
  // store any error messages that occur during API calls.

  const [playerId, setPlayerId] = useState("32045");
  const [playerInfo, setPlayerInfo] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchPlayerProfile(playerId);
        setPlayerInfo(response);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data from the API");
        setLoading(false);
      }
    }
    fetchData();
  }, [playerId]);

  async function fetchPlayerProfile(playerId) {
    const options = {
      method: "GET",
      url: "https://mlb-sport-live-data-api.p.rapidapi.com/mlb-player-info/v1/data",
      params: { id: playerId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mlb-sport-live-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.data && response.data.player) {
        const { firstName, lastName, position, height, weight } =
          response.data.player;

        const playerData = {
          firstName,
          lastName,
          position,
          height,
          weight,
        };

        return playerData;
      } else {
        throw new Error("Error: Missing data in the API response");
      }
    } catch (error) {
      console.error(
        "Error fetching player info:",
        error.response || error.message
      );
      throw new Error("An error occurred while fetching data the API response");
    }
  }

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
  const handlePlayerChange = () => {
    const newPlayerId = "12345";
    setPlayerId(newPlayerId);
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
          Player Info
        </Typography>
      </Box>
      {playerInfo && (
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
            <Typography sx={{ fontSize: "1.2rem" }}>
              Name: {playerInfo.firstName} {playerInfo.lastName}
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
            <Typography sx={{ fontStyle: "italic" }}>
              Position: {playerInfo.position.name}
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
            <Typography sx={{ fontStyle: "italic" }}>
              Height: {playerInfo.height}
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
            <Typography sx={{ fontSize: "1.2rem" }}>
              Weight: {playerInfo.weight}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", backgroundColor: "#E81828" }}
            onClick={handlePlayerChange}
          >
            Change Player
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default PlayerInfo;

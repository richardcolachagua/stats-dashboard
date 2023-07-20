import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_BASEBALL_API_KEY;

function PlayerInfo() {
  const [playerId, setPlayerId] = useState("32045");
  const [playerInfo, setPlayerInfo] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchPlayerProfile(playerId);
  }, [playerId]);

  useEffect(() => {
    if (buttonClicked) {
    }
  }, [buttonClicked, playerId]);

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

        setPlayerInfo(playerData);
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

  if (!playerInfo) {
    return <CircularProgress />;
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
          Player Info
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
        sx={{ marginTop: "!rem", backgroundColor: "#E8128" }}
        onClick={handlePlayerChange}
      >
        Change Player
      </Button>
    </Box>
  );
}

export default PlayerInfo;

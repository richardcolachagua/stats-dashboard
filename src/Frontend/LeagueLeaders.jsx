import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

function LeagueLeaders() {
  const [leagueLeaders, setLeagueLeaders] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.mlb.com", {
        headers: {
          "Ocp-Apim-Subscription-Key": "YOUR_API_KEY_HERE",
        },
      })
      .then((response) => {
        setLeagueLeaders(response.data.stats[0].splits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
        League Leaders
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagueLeaders.map(() => (
              <TableRow>
                <TableCell component="th" scope="row"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LeagueLeaders;

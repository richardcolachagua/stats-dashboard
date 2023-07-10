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

function PlayerStats() {
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.mlb.com/api/v1/people/54361/stats?group=hitting", {
        headers: {
          "X-RapidAPI-Key":
            "b3dd72f6dbmsh95bbf8a55ef2b53p190f0fjsn0dd538ebb8d7",
          "X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPlayerStats(response.data.stats[0].splits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
        Player Stats
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Season</TableCell>
              <TableCell>Average</TableCell>
              <TableCell>Home</TableCell>
              <TableCell>RBIs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerStats.map((stat) => (
              <TableRow key={stat.season}>
                <TableCell component="th" scope="row">
                  {stat.season}
                </TableCell>
                <TableCell>{stat.stat.avg}</TableCell>
                <TableCell>{stat.stat.hr}</TableCell>
                <TableCell>{stat.stat.rbi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default PlayerStats;

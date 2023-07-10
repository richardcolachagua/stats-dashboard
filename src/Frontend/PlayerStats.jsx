import React, { useState, useEffect } from "react";
import { fetchPlayerStats } from "../Backend/api";
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
    fetchPlayerStats()
      .then((data) => {
        setPlayerStats(data.stats[0].splits);
      })
      .catch((error) => {
        console.error(error);
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

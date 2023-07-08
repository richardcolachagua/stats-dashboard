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

function TeamStandings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.mlb.com/api/v1/standings?leagueId=103.104", {
        headers: {
          "Ocp-Apim-Subscription-Key": "YOUR_API_KEY_HERE",
        },
      })
      .then((response) => {
        setStandings(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
        Team Standings
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Wins</TableCell>
              <TableCell>Losses</TableCell>
              <TableCell>Winning Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map((standing) =>
              standing.teamRecords.map((record) => (
                <TableRow key={record.team.id}>
                  <TableCell component="th" scope="row ">
                    {record.team.name}
                  </TableCell>
                  <TableCell>{record.wins}</TableCell>
                  <TableCell>{record.losses}</TableCell>
                  <TableCell>{record.winningPercentage}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default TeamStandings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Paper,
} from "@mui/material";

function BaseballStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://statapi.mlb.com/api/v1/teams/143/roster", {
        headers: {
          "": "",
        },
      })
      .then((response) => {
        setStats(response.data.roster);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
        Baseball Stats
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Nunmber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((player) => (
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

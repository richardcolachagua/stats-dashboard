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

function GameSchedule() {
  const [gameSchedule, setGameSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.mlb.com", {
        headers: {
          "Ocp-Apim-Subscription-Key": "YOUR_API_KEY_HERE",
        },
      })
      .then((response) => {
        setGameSchedule(response.data.schedule);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gameSchedule.map((schedule) => (
                <TableRow key={schedule.season}>
                  <TableCell component="th" scope="row">
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </Box>
  );
}
export default GameSchedule;

import React from "react";
import PlayerInfo from "./PlayerInfo";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <PlayerInfo />
    </Box>
  );
};

export default Dashboard;

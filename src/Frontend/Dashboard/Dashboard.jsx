import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";

const Dashboard = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Header />
      <Box sx={{ height: 300, width: 300 }}>
        <Typography>Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;

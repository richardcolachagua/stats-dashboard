import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      <Header />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "50px" }}
      >
        <Grid item>
          <Link to="/playerinfo">
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: 200,
                height: 200,
                backgroundColor: "#FF1F33",
                display: "flex",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Typography
                color="white"
                fontFamily="monospace"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                Player Info
              </Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item>
          <Link to="/teaminfo">
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: 200,
                height: 200,
                backgroundColor: "#FF1F33",
                display: "flex",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Typography
                color="white"
                fontFamily="monospace"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                Team Info
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/allplayers">
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: 200,
                height: 200,
                backgroundColor: "#FF1F33",
                display: "flex",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Typography
                color="white"
                fontFamily="monospace"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                All Players
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/allteams">
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: 200,
                height: 200,
                backgroundColor: "#FF1F33",
                display: "flex",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Typography
                color="white"
                fontFamily="monospace"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                All Teams
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

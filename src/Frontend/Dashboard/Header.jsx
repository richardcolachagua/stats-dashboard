import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" fontWeight="bold" color="blue" fontFamily="monospace">
        MLB Player & Team Stats Dashboard
      </Typography>
      <Typography variant="h6" fontWeight="bold" color="red" fontFamily="monospace">
        Created by Richard Colachagua
      </Typography>
      <Link to="https://rapidapi.com/Creativesdev/api/mlb-sport-live-data-api/">
        <Button variant="contained" color="success">
          Go To API
        </Button>
      </Link>
    </Box>
  );
};

export default Header;

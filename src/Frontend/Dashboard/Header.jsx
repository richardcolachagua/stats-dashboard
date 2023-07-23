import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
      >
        <Typography variant="h1" fontWeight={700}>
          MLB Player and Team Stats Dashboard
        </Typography>
        <Typography variant="h3" fontWeight={300}>
          Created by Richard Colachagua
        </Typography>
        <Link to="/https://rapidapi.com/Creativesdev/api/mlb-sport-live-data-api/">
          Go to API
        </Link>
      </Stack>
    </Box>
  );
};

export default Header;

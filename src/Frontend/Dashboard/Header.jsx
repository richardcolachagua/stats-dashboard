import React from "react";
import { Box, Stack, Typography } from "@mui/material";

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
      </Stack>
    </Box>
  );
};

export default Header;

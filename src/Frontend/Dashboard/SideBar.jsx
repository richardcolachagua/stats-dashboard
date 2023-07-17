import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PeopleIcon from "@mui/icons-material/People";
import GroupIcon from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/team-info">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="TeamInfo" />
        </ListItem>
        <ListItem button component={Link} to="/player-info">
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary="PlayerInfo" />
        </ListItem>
        <ListItem button component={Link} to="/AllPlayers">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="AllPlayers" />
        </ListItem>
        <ListItem button component={Link}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="AllTeams" />
        </ListItem>
      </List>
      <Typography variant="h5">Sidebar Content</Typography>
    </Drawer>
  );
};

export default SideBar;

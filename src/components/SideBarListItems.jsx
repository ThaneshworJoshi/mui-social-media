import React from "react";
import {
  Inbox as InboxIcon,
  Home as HomeIcon,
  AccountBox,
  Settings,
  PersonSearch,
  Storefront,
  PagesOutlined,
  MoodRounded,
  ModeNight,
} from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

let sideData = [
  {
    text: "Home",
    link: "#home",
    icon: HomeIcon,
  },
  {
    text: "Pages",
    link: "#pages",
    icon: PagesOutlined,
  },
  {
    text: "Groups",
    link: "#groups",
    icon: Storefront,
  },

  {
    text: "Markteplace",
    link: "#marketplace",
    icon: PersonSearch,
  },

  {
    text: "Settings",
    link: "#settings",
    icon: Settings,
  },

  {
    text: "Profile",
    link: "#profile",
    icon: AccountBox,
  },
];

const SideBarListItems = ({ mode, setMode }) => {
  return (
    <List>
      {sideData.map(({ icon: Icon, ...item }) => (
        <ListItem disablePadding>
          <ListItemButton component="a" href={item.link}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item?.text} />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SideBarListItems;

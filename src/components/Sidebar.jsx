import React from "react";
import { Box } from "@mui/material";
import SideBarListItems from "./SideBarListItems";

const Sidebar = ({ mode,  setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <SideBarListItems mode={mode} setMode={setMode}/>
      </Box>
    </Box>
  );
};

export default Sidebar;

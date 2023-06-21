import { Box } from "@mui/material";
import React from "react";
import FriendList from "./FriendList";
import LatestChat from "./LatestChat";
import PhotoList from "./PhotoList";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" overflow="hidden" height="100vh">
        <Box
          sx={{
            overflowY: " scroll",
            height: "100%",
            paddingRight: "20px",
            scrollbarWidth: "none",
          }}
        >
          <FriendList />
          <PhotoList />
          <LatestChat />
        </Box>
      </Box>
    </Box>
  );
};

export default RightBar;

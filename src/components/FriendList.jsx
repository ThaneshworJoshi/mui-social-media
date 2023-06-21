import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const FriendList = () => {
  return (
    <Box width={300}>
      <Typography variant="h6" fontWeight={100} mb={2}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="./assets/face1.jpeg" />
        <Avatar alt="Travis Howard" src="./assets/face2.jpeg" />
        <Avatar alt="Cindy Baker" src="./assets/face1.jpeg" />
        <Avatar alt="Agnes Walker" src="./assets/face1.jpeg" />
        <Avatar alt="Travis Howard" src="./assets/face2.jpeg" />

        <Avatar alt="Trevor Henderson" src="./assets/face1.jpeg" />

        <Avatar alt="Cindy Baker" src="./assets/face1.jpeg" />
        <Avatar alt="Travis Howard" src="./assets/face2.jpeg" />

        <Avatar alt="Agnes Walker" src="./assets/face1.jpeg" />
        <Avatar alt="Trevor Henderson" src="./assets/face1.jpeg" />
      </AvatarGroup>
    </Box>
  );
};

export default FriendList;

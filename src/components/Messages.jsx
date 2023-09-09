import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MessageCards from "./MessageCards";

const Messages = () => {
  return (
    <>
      <Box
        sx={{ display: "inline-flex", justifyContent: "center", width: "100%" }}
      >
        <Typography variant="h6">Messages</Typography>
      </Box>
      <br />
      <br />
      <MessageCards
        name="Achyut Thapa"
        avatar="A"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Bishwash Purkoti"
        avatar="B"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Asmin Lamichane"
        avatar="A"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Sarthak GC"
        avatar="S"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Achyut Thapa"
        avatar="A"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Bishwash Purkoti"
        avatar="B"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Asmin Lamichane"
        avatar="A"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />

      <MessageCards
        name="Sarthak GC"
        avatar="S"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum, dolor illo explicabo nostrum error."
      />
    </>
  );
};

export default Messages;

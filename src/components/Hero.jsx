import { Box, Button } from "@mui/material";
import React from "react";
import Posts from "./Posts";
import Messages from "./Messages";

const Hero = () => {
  const sectionStyle = {
    display: "flex",
    gap: "10px",
    position: "relative",
  };
  return (
    <>
      <section style={sectionStyle}>
        <Box
          sx={{
            width: "25%",
            height: "100vh",
            background: "black",
            position: "sticky",
            left: 0,
            top: "85px",
            display: { xs: "none", md: "block" },
            paddingLeft: "20px",
          }}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "50%",
            flex: 1,
            padding: "40px 20px",
          }}
        >
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </Box>
        <Box
          className="scroll"
          sx={{
            width: "25%",
            height: "100vh",
            background: "pink",
            position: "sticky",
            right: 0,
            top: "85px",
            display: { xs: "none", md: "Block" },
            padding: "20px 20px",
            overflow: "scroll",
          }}
        >
          <Messages />
        </Box>
      </section>
    </>
  );
};

export default Hero;
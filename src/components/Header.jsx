import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LearnandBrowse from "./LearnandBrowse";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  const [style, setStyle] = useState("none");
  const [shown, setShown] = useState("flex");
  const showSearch = () => {
    if (style === "none") {
      setStyle("flex");
      setShown("none");
    } else {
      setStyle("none");
      setShown("flex");
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ padding: "10px" }}>
        <Toolbar className="toolbar">
          <Box
            className="left"
            sx={{
              display: { xs: shown, md: "flex" },
            }}
          >
            <Avatar
              src="/src/images/logo.png"
              sx={{ cursor: "pointer" }}
            ></Avatar>
            <LearnandBrowse />
          </Box>
          <Tooltip title="search">
            <Box className="middle">
              <Box
                sx={{
                  display: { xs: style, md: "flex" },
                }}
              >
                <input type="search" placeholder="Search" />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <SearchIcon onClick={showSearch} />
              </Box>
            </Box>
          </Tooltip>

          <Box
            className="right"
            sx={{
              display: { xs: shown, md: "flex" },
            }}
          >
            <Tooltip title="notifications">
              <NotificationsIcon
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  display: { sm: "flex", xs: "none" },
                }}
              />
            </Tooltip>
            <Tooltip title="messages">
              <ChatBubbleIcon
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  display: { sm: "flex", xs: "none" },
                }}
              />
            </Tooltip>
            <Tooltip title="Profile">
              <Avatar sx={{ width: "40px", height: "40px", cursor: "pointer" }}>
                A
              </Avatar>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

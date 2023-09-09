import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
const Posts = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          marginBottom: "70px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "15%",
            background: "#EFD3D3",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className="profile" sx={{ marginLeft: "10px" }}>
            <Avatar sx={{ cursor: "pointer" }}>A</Avatar>
          </Box>
          <Box
            className="username"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              marginLeft: "10px",
            }}
          >
            <h5 style={{ margin: 0, cursor: "pointer" }}>John Smith</h5>
            <a href="#">
              <p style={{ fontSize: "11px", margin: 0, color: "#865555" }}>
                @john234
              </p>
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            background: "black",
          }}
        >
          <a href="/src/images/math.jpg" target="_black">
            <img
              src="/src/images/math.jpg"
              alt="math"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </a>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "15%",
            background: "#EFD3D3",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <CommentOutlinedIcon />
            <Typography variant="h6">Comment</Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <ShareOutlinedIcon />
            <Typography variant="h6">Share</Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BookmarkBorderOutlinedIcon />
            <Typography variant="h6">Save</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Posts;

import { Avatar, Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Welcomepage = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const section = {
    backgroundImage: `url('/src/images/bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const grid1 = {
    height: "100vh",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const grid2 = {
    backgroundImage: `url('/src/images/edbg.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "-4px 7px 19px 2px #9f5353",
    position: "relative",
    top: "-60px",
  };
  const button = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%", // Adjust the width as needed for smaller screens
    maxWidth: "450px",
    bgcolor: "#3498DB",
    color: "white",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <section style={section}>
        <Avatar
          src="/src/images/logo.png"
          sx={{ padding: "10px 20px", cursor: "pointer" }}
        ></Avatar>

        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            style={grid1}
            sx={{
              backgroundImage: {
                md: "none",
                xs: `url("/src/images/edbg.jpg")`,
              },
              backgroundSize: "cover",

              color: {
                md: "black",
                xs: "white",
              },
            }}
          >
            <div>
              <Typography variant="h2">
                Welocome to <br /> LEARNITY
              </Typography>
              <Typography variant="p" letterSpacing={0.5}>
                Welcome to our community! Our app makes <br />
                connecting, learning, and staying in touch <br />
                effortless and enjoyable.
              </Typography>
              <br />
              <br />
              <Typography variant="p" letterSpacing={1}>
                Join our community for seamless messaging and learning.
              </Typography>
            </div>
            <br />
            <div style={button}>
              <Button
                variant="Contained"
                sx={{
                  background: "#27AE60",
                  color: "white",
                  width: "50%",
                  ":hover": {
                    background: "orange",
                  },
                }}
                onClick={handleOpen1}
              >
                Login
              </Button>

              <Modal open={open1} onClose={handleClose1}>
                <Box sx={modalStyle}>
                  <Login />
                </Box>
              </Modal>
              <Button
                variant="Contained"
                sx={{
                  background: "#E67E22",
                  color: "white",
                  width: "50%",
                  ":hover": {
                    background: "blue",
                  },
                }}
                onClick={handleOpen2}
              >
                Sign Up
              </Button>
              <Modal open={open2} onClose={handleClose2}>
                <Box sx={modalStyle}>
                  <SignUp />
                </Box>
              </Modal>
            </div>
          </Grid>
          <Grid item md={6} xs={12} style={grid2}></Grid>
        </Grid>
      </section>
    </>
  );
};

export default Welcomepage;

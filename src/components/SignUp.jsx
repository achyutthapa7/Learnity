import React from "react";
import { Typography } from "@mui/material";

const SignUp = () => {
  const inputdiv = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };
  const input = {
    width: "100%",
    background: "white",
    outlineWidth: 0,
    border: "none",
    height: "40px",
    borderRadius: "5px",
    padding: "0 10px",
  };
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Sign Up
      </Typography>
      <br />
      <form>
        <div style={inputdiv}>
          <input type="email" placeholder="Enter Your Email" style={input} />
          <input type="email" placeholder="Enter Your Password" style={input} />
        </div>
        <br />

        <div className="buttondiv">
          <button className="loginbtn">Sign Up</button>
        </div>
        <br />
        <div
          className="text"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="p">
            Already have an account? <a href="">Login</a>
          </Typography>
        </div>
      </form>
    </>
  );
};

export default SignUp;

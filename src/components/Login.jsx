import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    const Email = document.querySelector(".email");
    const Password = document.querySelector(".password");
    e.preventDefault();
    checkInput();
    Email.value = "";
    Password.value = "";
  };
  const checkInput = () => {
    const Email = document.querySelector(".email");
    const Password = document.querySelector(".password");
    if (Email.value != "" && Password.value != "") {
      navigate("/interest");
    } else if (Email.value == "" || Password.value == "") {
      alert("cannot leave space");
    }
  };
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Login
      </Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <div style={inputdiv}>
          <input
            type="email"
            placeholder="Enter Your Email"
            style={input}
            className="email"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            style={input}
            className="password"
          />
        </div>
        <br />

        <div className="buttondiv">
          <button className="loginbtn">Login</button>
        </div>
        <br />
        <div
          className="text"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="p">
            Don't have an account? <a href="">Sign Up</a>
          </Typography>
        </div>
      </form>
    </>
  );
};

export default Login;

import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
    position: "relative",
  };

  const handleSubmit = (e) => {
    const Email = document.querySelector(".email");
    const Password = document.querySelector(".password");
    e.preventDefault();
    checkInput();
    if (Email.value != "" && Password.value != "") {
      Email.value = "";
      Password.value = "";
    }
  };

  const checkInput = () => {
    const Email = document.querySelector(".email");
    const Password = document.querySelector(".password");
    if (
      Email.value === "achyut13thapa@gmail.com" &&
      Password.value === "qwertyuiop@1234567890"
    ) {
      navigate("/interest");
    } else if (Email.value === "" || Password.value === "") {
      alert("Cannot leave space");
    } else {
      alert("Email and password don't match");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              style={input}
              className="password"
            />
            {passwordVisible ? (
              <VisibilityIcon
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  color: "#a76767",
                }}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <VisibilityOffIcon
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  color: "#a76767",
                }}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
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

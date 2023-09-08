import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import math from "/src/images/math.jpg";
import history from "/src/images/history.jpg";
import physics from "/src/images/physics.jpg";
import coding from "/src/images/coding.jpg";
import contentcreation from "/src/images/contentcreation.jpg";
import business from "/src/images/business.jpg";

const Interests = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const navigate = useNavigate();
  const section = {
    height: "auto",
    color: "#ffffff",
    paddingBottom: "50px",
  };
  const handleClick = () => {
    if (selectedCards.length > 0) {
      navigate("/home");
    } else {
      alert("Please select at least one card.");
    }
  };
  const clicked = (event) => {
    const selected = event.currentTarget;
    selected.classList.toggle("select");
    if (selected.classList.contains("select")) {
      setSelectedCards((prev) => [...prev, "random", "words"]);
    } else {
      setSelectedCards((prev) => [""]);
    }
  };
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", clicked);
    });
  }, []);

  return (
    <>
      <section style={section}>
        <Typography component="p" fontSize="25px" textAlign="center" pt={5}>
          Let's tailor your learning experience. <br /> Choose your areas of
          interest to get started:
        </Typography>
        <br />
        <br />
        <div className="cards">
          <Cards imgsrc={math} name="Mathematics" />
          <Cards imgsrc={history} name="History" />
          <Cards imgsrc={physics} name="Physics" />
          <Cards imgsrc={coding} name="Coding" />
          <Cards imgsrc={business} name="Business" />
          <Cards imgsrc={contentcreation} name="Content Creation" />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleClick}
            variant="Contained"
            sx={{
              background: "#27AE60",
              width: "30%",
              ":hover": {
                background: "blue",
              },
            }}
          >
            Continue
          </Button>
        </div>
      </section>
    </>
  );
};

export default Interests;

import { Typography } from "@mui/material";
import React from "react";
const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="name">
          <Typography variant="h6" letterSpacing={1.2}>
            {props.name}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";
import "./flag.scss";

export const Flag = ({ flagUrl, name, width, height }) => (
  <img
    className="flag-img"
    src={flagUrl}
    {...{ width }}
    {...{ height }}
    alt={name}
  />
);

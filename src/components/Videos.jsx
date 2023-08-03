import React from "react";
import { createPortal } from "react-dom";

const videosContainer = document.getElementById("videos");

export const Videos = ({ children }) => {
  const modalBody = <div>{children}</div>;
  return createPortal(modalBody, videosContainer);
};

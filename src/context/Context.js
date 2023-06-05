import React, { createContext, useState } from "react";

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  return (
    <Context.Provider value={[videos, setVideos]}>{children}</Context.Provider>
  );
};

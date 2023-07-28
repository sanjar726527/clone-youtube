import React, { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <Context.Provider value={[videos, setVideos, comments]}>
      {children}
    </Context.Provider>
  );
};

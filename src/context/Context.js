import React, { createContext, useState } from "react";

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <Context.Provider value={[videos, setVideos, comments, setComments]}>
      {children}
    </Context.Provider>
  );
};

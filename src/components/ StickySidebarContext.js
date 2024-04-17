import React, { createContext, useContext, useState } from 'react';

const StickySidebarContext = createContext();

export const StickySidebarProvider = ({ children }) => {
  const [isSidebarSticky, setSidebarSticky] = useState(false);

  const setSticky = (value) => {
    setSidebarSticky(value);
  };

  return (
    <StickySidebarContext.Provider value={{ isSidebarSticky, setSticky }}>
      {children}
    </StickySidebarContext.Provider>
  );
};

export const useStickySidebar = () => {
  return useContext(StickySidebarContext);
};

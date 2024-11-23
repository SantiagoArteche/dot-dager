import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideMenu = () => setIsOpen(true);
  const closeSideMenu = () => setIsOpen(false);

  const data = { isOpen, openSideMenu, closeSideMenu };

  return (
    <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
  );
};

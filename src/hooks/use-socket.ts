import { useContext } from "react";

import { SocketContext } from "../context/socket";

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("Something went wrong!");
  }
  return context;
};

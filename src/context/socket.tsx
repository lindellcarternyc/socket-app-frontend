import { createContext, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../config";

interface SocketContextType {
  socket: Socket | null;
  connectSocket: () => void;
}

interface SocketProviderProps {
  children: JSX.Element;
}

export const SocketContext = createContext<SocketContextType | null>(null);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const connectSocket = () => {
    if (!socket) {
      const newSocket = io(SOCKET_URL);
      setSocket(newSocket);
      return;
    }
    socket.connect();
  };

  return (
    <SocketContext.Provider value={{ socket, connectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

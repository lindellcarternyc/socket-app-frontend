export const SOCKET_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:6969"
    : "https://socket-app-backend-gamma.vercel.app/";

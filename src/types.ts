export type SocketStatus =
  | "connecting"
  | "connected"
  | "disconnected"
  | "error";

export interface GeolocationPosition {
  lat: number;
  lng: number;
}

export type LocationStatus = "accessed" | "denied" | "unknown" | "error";

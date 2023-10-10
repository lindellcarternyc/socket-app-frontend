import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { GeolocationPosition } from "../../../types";

interface LocationProps {
  location: GeolocationPosition;
}

const Icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function LocationMarker({ location }: LocationProps) {
  const map = useMapEvents({});

  useEffect(() => {
    map.flyTo([location.lat, location.lng]);
  }, [location, map]);

  return location === null ? null : (
    <Marker position={location} icon={Icon}>
      <Popup>User is here!</Popup>
    </Marker>
  );
}

export default function Map({ location }: LocationProps) {
  if (!location) return "No location found!";

  return (
    <div className="w-full bg-gray-100 h-[600px] md:h-[550px]">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={30}
        scrollWheelZoom={true}
        className="h-screen"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker location={location} />
      </MapContainer>
    </div>
  );
}

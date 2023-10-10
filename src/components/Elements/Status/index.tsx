import { MdOutlineLocationOn, MdOutlineLocationOff } from "react-icons/md";
import { LuServerOff, LuServer } from "react-icons/lu";

import type { LocationStatus, SocketStatus } from "../../../types";

interface StatusProps {
  locationStatus: LocationStatus | null;
  socketStatus: SocketStatus;
}

function Status({ locationStatus, socketStatus }: StatusProps) {
  return (
    <section className="flex flex-wrap gap-2">
      {locationStatus && (
        <div
          className={`p-2 rounded-full ${
            locationStatus === "accessed"
              ? "bg-green-500"
              : "bg-red-500 animate-pulse"
          }`}
        >
          <p className="text-xs font-semibold text-gray-100 flex gap-2 items-center">
            {locationStatus === "accessed" ? (
              <MdOutlineLocationOn size={22} />
            ) : (
              <MdOutlineLocationOff size={22} />
            )}
            {locationStatus}
          </p>
        </div>
      )}
      {socketStatus && (
        <div
          className={`p-2 rounded-full ${
            socketStatus === "connected"
              ? "bg-green-500"
              : "bg-red-500 animate-pulse"
          }`}
        >
          <p className="text-xs font-semibold text-gray-100 flex gap-1 items-center">
            {socketStatus === "connected" ? (
              <LuServer size={22} />
            ) : (
              <LuServerOff size={22} />
            )}
            {socketStatus}
          </p>
        </div>
      )}
    </section>
  );
}

export default Status;

"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [20, 0];

export default function WorldMapClient() {
  return (
    <div className="w-screen h-screen fixed inset-0 z-50">
      <MapContainer
        center={position}
        zoom={3}
        minZoom={2}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          // English-label OSM-style tiles (replace with your real key)
          url={`https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`}
          attribution="&copy; OpenStreetMap contributors & MapTiler"
        />
      </MapContainer>
    </div>
  );
}

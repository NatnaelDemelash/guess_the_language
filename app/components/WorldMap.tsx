"use client";

import dynamic from "next/dynamic";

const WorldMapClient = dynamic(() => import("./WorldMapClient"), {
  ssr: false, // <-- this prevents Next from trying to render it on the server
});

export default function WorldMap() {
  return <WorldMapClient />;
}

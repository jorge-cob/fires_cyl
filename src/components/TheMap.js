import React from "react";
import { useMap } from "react-leaflet";

function TheMap() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null
}
export default TheMap;
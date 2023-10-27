import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import TheMap from "./TheMap";

function FiresMap(props) {
  // const coordinates = props.coordinates;
  // const testCoordinates = props.testCoordinates;
  const coordinates = [40.4165, -3.70256];
    return (
      <>  
        {/* <MapContainer 
          className="map"
          center={[coordinates[0], coordinates[1]]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
            />  
        </MapContainer>   */}
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TheMap/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </>
    )
}
export default FiresMap;
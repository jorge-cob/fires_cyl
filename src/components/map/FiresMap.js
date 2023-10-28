import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet-src';
import "../../stylesheet/layout/_firesMap.scss";




function FiresMap(props) {
  const position = props.coords;
  const filteredData = props.filteredData;

    return (
      <>  
        <MapContainer center={[40.4165, -3.70256]} zoom={8}> 
          <TileLayer
            attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </>
    )
}
export default FiresMap;
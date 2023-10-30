import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet-src';
import "../../stylesheet/layout/_firesMap.scss";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useAPI } from '../../services/apiContext';



function FiresMap() {
  const { coordinates } = useAPI();

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const markers = (coordinates) => {
      // coordinates?.forEach(item => {
      //   return (
      //     <>
      //       <Marker
      //         position={item}
      //         icon={DefaultIcon}
      //       > 
      //       </Marker>
      //     </>
      //   )
      // });
  //PROBANDO UNO SOLO Q VENGA DEL CONTEXT:
      if(coordinates) {
        return (
          <>
            <Marker
              position={coordinates[0]}
              icon={DefaultIcon}
            > 
            </Marker>
          </>
        )
      };
    }


    return (
      <>  
        <MapContainer center={[41.754444, -4.781944]} zoom={7}> 
          <TileLayer
            attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        {markers(coordinates)}
        </MapContainer>
      </>
    )
}
export default FiresMap;
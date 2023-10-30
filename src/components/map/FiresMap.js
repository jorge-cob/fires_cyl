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
  console.log('coordrrrrinates', coordinates);
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;


    return (
      <>  
      {coordinates && 
      <MapContainer center={[41.754444, -4.781944]} zoom={7}> 
      <TileLayer
        attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
    {coordinates.forEach(item => {
    <Marker
    position={item}
    icon={DefaultIcon}
  > 
  </Marker>
    
    })}
    </MapContainer>
  }
        
      </>
    )
}
export default FiresMap;
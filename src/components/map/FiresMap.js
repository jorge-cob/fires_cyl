import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet-src';
import "../../stylesheet/layout/_firesMap.scss";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



function FiresMap(props) {
  const position = props.coords;
  const coordinates = props.coordinates;
  const filteredFires = props.filteredFires; //array de arrays de coordenadas
  const isNotFilteredFires = false;
  
  // if(filteredFires.length !== 0) {
  //   isNotFilteredFires = true;
  // } else {
  //   isNotFilteredFires = false;
  // }

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

// const multipleMarkers = (filteredFires) => {
//     filteredFires.forEach(item => {
//       return (
//         <>
//           <Marker
//             position={item}
//             icon={DefaultIcon}
//           > 
//             <Popup>Holiii</Popup>
//           </Marker>
//         </>
//       )
//     })
//   }


    return (
      <>  
        <MapContainer center={[40.4165, -3.70256]} zoom={8}> 
          <TileLayer
            attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {/* {isNotFilteredFires ?  */}
            <Marker
              position={[40.4165, -3.70256]}
              icon={DefaultIcon}
            > 
              <Popup>Holiii</Popup>
            </Marker>
            :
             {/* multipleMarkers(filteredFires)  //NO ESTOY SEGURA DE Q PUEDA METER AQUÍ UNA FUNCIÓN ASÍ, QUIZA SIN PARENTESIS
          } */}
        </MapContainer>
      </>
    )
}
export default FiresMap;
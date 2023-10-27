import React from "react";
import L from "leaflet";
import getDataFromOsMapi from "../services/getDataFromOsMapi";

function Map(props) {

    ////markers
    // const marker = L.marker([latitude, longitude]).addTo(map);
    // const circle = L.circle([latitude, longitude], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(map);

    // //esta constante guarda un array de coordinates??
    // const coordinates = props.data.map(item => {
    //     const location = `${item.termino_municipal}, ${item.provincia}`;
    //     const coordinates = getDataFromOsMapi(location)
    
    //     return coordinates;
    // });

    // Selecciona el contenedor del mapa por su identificador. 
    // estas son las coord de castilal y león y el último parámetro creo q es level of zoom
    const map = L.map('map').setView([41.652278, -4.723611], 8); 

    // Añade un fondo de mapa 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //Renderizar la data: necesito los fires brutos (data) y los filteredFires


    // marker.bindPopup(location).openPopup();

    return (
      <>  
        <div id="map"></div>
      </>
    )
}
export default Map;
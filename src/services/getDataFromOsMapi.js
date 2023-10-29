import axios from 'axios';


// const getDataFromOsMapi = (location) => {
//     const locationToGeocode = location; // Replace with the location you want to geocode
//     const encodedLocation = encodeURIComponent(locationToGeocode);
//     const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`;
        
//    return fetch(apiUrl)
//       .then(response => response.json())
//       .then((data) => {
//         if (data.length > 0) {
//           console.log("api OPM working", data)
//           const firstResult = data[0];
//           const latitude = parseFloat(firstResult.lat);
//           const longitude = parseFloat(firstResult.lon);
//           console.log(`Coordinates: Latitude ${latitude}, Longitude ${longitude}`);
//           const coordinates = [latitude, longitude];
//           return coordinates;
//         } else {
//           console.log("Location not found.");
//         }
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
// }
// export default getDataFromOsMapi;

async function getDataFromOsMapi(location) {
    const encodedLocation = encodeURIComponent(location);
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`;
        
    try {
      const { data } = await axios.get(apiUrl);
      if (data.length > 0) {
        console.log("api OPM working", data)
        const firstResult = data[0];
        const latitude = parseFloat(firstResult.lat);
        const longitude = parseFloat(firstResult.lon);
        console.log(`Coordinates: Latitude ${latitude}, Longitude ${longitude}`);
        const coordinates = [latitude, longitude];
        return coordinates;
      }
    } catch (error) {
      console.error(error);
    };
}
export default getDataFromOsMapi;



const getDataFromOsMapi = (location) => {
    const locationToGeocode = location; // Replace with the location you want to geocode
    const encodedLocation = encodeURIComponent(locationToGeocode);
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`;
        
   return fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log("api OPM working", data)
          const firstResult = data[0];
          const latitude = parseFloat(firstResult.lat);
          const longitude = parseFloat(firstResult.lon);
          console.log(`Coordinates: Latitude ${latitude}, Longitude ${longitude}`);
          const coordinates = [latitude, longitude];
          return coordinates;
        } else {
          console.log("Location not found.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
}
export default getDataFromOsMapi;




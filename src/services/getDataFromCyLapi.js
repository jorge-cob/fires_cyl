const getDataFromCyLapi = () => {
  const apiUrl="https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false";
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API CyL working,", data);
        const cleanData = data.results; 
        console.log(data.results);
        return cleanData;
      })
      .catch((error) => {
        console.error("Error to obtain API data:", error);
    });
}
export default getDataFromCyLapi;
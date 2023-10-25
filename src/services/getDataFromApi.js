const getDataFromApi = () => {
    return fetch("https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?limit=10&offset=0&timezone=UTC&include_links=false&include_app_metas=false")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const cleanData = data.results; 
        console.log(data.results);
        return cleanData;
      })
      .catch((error) => {
        console.error("Error to obtain API data:", error);
    });
}
export default getDataFromApi;
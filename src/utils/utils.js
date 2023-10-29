
// import getDataFromOsMapi from "../services/getDataFromOsMapi";

// const coordinates = (data) => { 
//     data.map(item => {
//         const location = `${item.termino_municipal}, ${item.provincia}`;
//         const coordinates = getDataFromOsMapi(location)
    
//         return coordinates; // devuelve array de arrays con las coordenadas
//     });
// }
// export default coordinates;

export function locationsGenerator(data) {
  const locations = [];
  data.forEach(obj => {
      const location = `${obj.termino_municipal}, ${obj.provincia}`;
      locations.push(location);
  });  

  return locations; 
}



export const filterGenerator = (filterFields, firesData) => {
    const filterArray = [];
    filterFields.forEach(element => {
      const filterSet = [...new Set(firesData.map(obj => obj[element])) ];
      filterArray.push({[element]: filterSet.filter(Boolean)}) // ESTO NO LO ENTIENDO
    });
  
    return filterArray;
  }
  
  export const columnGenerator = (firesData) => {
    const propertyNamesArray = Object.keys(firesData[0]);
    const propertyNamesObjectsArray = propertyNamesArray.map((propertyName) => ({
        id: propertyName,
        label: propertyName[0].toUpperCase() + propertyName.slice(1).replace(/_/g, " "),
        minWidth: 170,
        align: 'right',
      })
    );
    
    return propertyNamesObjectsArray
  }
  
  export const filterFires = (fires, selectedFilters) => {
    let filteredData = [];
  
    fires.forEach((fire) => {
      let propControl = 0; // no entiendo para qué es esta constante
      Object.keys(fire).forEach((key) => {
          if(selectedFilters.hasOwnProperty(key) && (selectedFilters[key] !== fire[key] && selectedFilters[key] !== 'none')) {
            propControl++; 
          }
        });                 
        if (propControl === 0) { filteredData.push(fire) } 
    });                                 
    return filteredData;
  }
  
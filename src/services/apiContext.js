import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { filterFires, filterGenerator, locationsGenerator } from '../utils/utils';

const APIContext = createContext();

const filterFields = ['termino_municipal', 'situacion_actual', 'causa_probable', 'nivel_maximo_alcanzado'];

function loadInitialFilters() {
  let initialFilters = {};
  filterFields.forEach(field => initialFilters[field] = "none");
  localStorage.setItem('filters', JSON.stringify(initialFilters))
}
function getInitialFiltersState() {
  const filters = localStorage.getItem('filters')
  return filters ? JSON.parse(filters) : loadInitialFilters();
}

function coordinatesGenerator(locations) {
    const coordinates = [];
    locations.forEach((location) => {
        async function fetchDataOsMapi(location) {
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
                const fireCoordinates = [latitude, longitude];
                coordinates.push(fireCoordinates);
              }
            } catch (error) {
              console.error(error);
            };
        }
        fetchDataOsMapi(location);
    });
    return coordinates;

}// devuelve array de arrays con las coordenadas


export function APIContextProvider({ children }) {
  const [fires, setFires] = useState([]);
  const [fireCount, setFireCount] = useState(0);
  const [filtersWithOptions, setFiltersWithOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(getInitialFiltersState)
  const [filteredFires, setFilteredFires] = useState([]);
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState([]); 

  useEffect(() => {
    async function fetchDataCyL() {
      const { data } = await axios.get(
        `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false`
      );
      setFires(data.results);
      setFireCount(data.total_count)
      setFiltersWithOptions(filterGenerator(filterFields, data.results));
      setFilteredFires(filterFires(data.results, selectedFilters));
    }
    fetchDataCyL();
  }, [, selectedFilters]); 

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(selectedFilters))
  }, [selectedFilters])

  useEffect(() => {
    setLocations(locationsGenerator(filteredFires.length > 0 ? filteredFires : fires)); 
    setCoordinates(coordinatesGenerator(locations));
  }, [,selectedFilters])
  return (
    <APIContext.Provider
      value={{
        fires,
        filteredFires,
        fireCount,
        filtersWithOptions,
        selectedFilters,
        setSelectedFilters,
        coordinates,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
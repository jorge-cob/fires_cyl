import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { filterFires, filterGenerator } from '../utils/utils';

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

export function APIContextProvider({ children }) {
  const [fires, setFires] = useState([]);
  const [fireCount, setFireCount] = useState(0);
  const [filtersWithOptions, setFiltersWithOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(getInitialFiltersState)
  const [filteredFires, setFilteredFires] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false`
      );
      setFires(data.results);
      setFireCount(data.total_count)
      setFiltersWithOptions(filterGenerator(filterFields, data.results));
      setFilteredFires(filterFires(data.results, selectedFilters));
    }
    fetchData();
  }, [, selectedFilters]); // por qué se pone esa coma al principio del array?


  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(selectedFilters))
  }, [selectedFilters])

  return (
    <APIContext.Provider
      value={{
        fires,
        filteredFires,
        fireCount,
        filtersWithOptions,
        selectedFilters,
        setSelectedFilters
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
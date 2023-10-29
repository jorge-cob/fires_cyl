import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useAPI } from '../services/apiContext';

export default function Filter({ data }) {
  const { selectedFilters, setSelectedFilters } = useAPI();

  //me lío aquí:
  const filterName = Object.keys(data)[0]; 
  const storedFilterValue = selectedFilters[filterName];
  const valueSet = Object.values(data)[0];

  const handleChange = (event) => {
    setSelectedFilters({...selectedFilters, [filterName]: event.target.value})
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{filterName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={storedFilterValue}
          label={filterName}
          onChange={handleChange}
        >
           <MenuItem value="none" key="none">Ninguno</MenuItem>
           {valueSet.map((value) => (
            <MenuItem value={value} key={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
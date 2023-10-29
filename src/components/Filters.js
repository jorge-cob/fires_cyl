import React from 'react';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { useAPI } from '../services/apiContext';

function Filters() {
    const { filtersWithOptions } = useAPI();
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {filtersWithOptions.map((filter) => (
                <Filter key={nanoid()} data={filter} />
            ))}
        </div>
    )
}
export default Filters;
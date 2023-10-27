import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


// const columns = [
//   { id: 'termino_municipal', label: 'Municipio', minWidth: 170 },
//   { id: 'provincia', label: 'Provincia', minWidth: 100 },
//   {
//     id: 'situacion_actual',
//     label: 'Situación actual',
//     minWidth: 170,
//     align: 'right',
//   },
//   {
//     id: 'causa_probable',
//     label: 'Causa probable',
//     minWidth: 170,
//     align: 'right',
//   },
//   {
//     id: 'nivel_maximo_alcanzado',
//     label: 'Nivel máximo alcanzado',
//     minWidth: 170,
//     align: 'right',
//   },
// ];



// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const data = props.data;
  console.log("data", data);

  // mis columns:
  function createColumns(data) {
    const propertyNamesArray = Object.keys(data[0]);
    propertyNamesArray.unShift("id");
    console.log("el unShift funciona", propertyNamesArray);
    const propertyNamesObjectsArray = propertyNamesArray.map((propertyName) => ({
        id: propertyName,
        label: propertyName[0].toUpperCase() + propertyName.slice(1).replace(/_/g, " "),
        minWidth: 170,
        align: 'right',
      })
    );
    console.log("propertyNamesObjectsArray", propertyNamesObjectsArray);
    
    return {propertyNamesObjectsArray} 
  }
  const columns = createColumns(data);
 

  // mis rows:
  function addIdToFires(data) {
    for(let i = 0; i < data.length; i++) {
      data[i].id = i;
    }
  }

  function transformArrayToObject(objectValues) {
    const objectfromArray = objectValues.reduce((obj, item) => {
      obj[item] = ''; 
      return obj;
    }, {});
    return objectfromArray;
  }

  const rows = (data) => {
    addIdToFires(data);
    for(let i = 0; i < data.length; i++) {
      const firesObjectsValues = Object.values(data[i]);
      const objectOfValues = transformArrayToObject(firesObjectsValues);
      return objectOfValues;
    };
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
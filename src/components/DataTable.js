import * as React from 'react';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';


const key = 'Composed Table';

const DataTable = (props) => {
  const data = props.data;

  const theme = useTheme(getTheme());

  return (
    <Table data={data} theme={theme}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Provincia</HeaderCell>            
              <HeaderCell>Situación actual</HeaderCell>
              <HeaderCell>Causa probable</HeaderCell>
              <HeaderCell>Máximo nivel alcanzado</HeaderCell>
              <HeaderCell>Localización</HeaderCell>
            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.provincia}</Cell>
                <Cell>{item.situacion_actual}</Cell>
                <Cell>{item.causa_probable}</Cell>
                <Cell>{item.nivel_máximo_alcanzado.toString()}</Cell>
                <Cell>{item.localizacion.toString()}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};
export default DataTable;
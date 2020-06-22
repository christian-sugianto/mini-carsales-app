import React from 'react';
import { useTable } from 'react-table';
import { Table as MaUTable, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import colors from '../assets/consts';

interface Props {
  data: any;
}

const VehicleTable: React.FC<Props> = ({ data }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <MaUTable style={{ width: '80%', margin: 'auto' }} {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell style={{ color: colors.secondaryColor }} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell style={{ color: 'white' }} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

const columns = [
  {
    Header: 'Vehicle Table',
    columns: [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Vehicle Type',
        accessor: 'vehicleType',
      },
      {
        Header: 'Make',
        accessor: 'make',
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
      {
        Header: 'Engine',
        accessor: 'engine',
      },
      {
        Header: 'Body Type',
        accessor: 'bodyType',
      },
      {
        Header: 'Doors',
        accessor: 'doors',
      },
      {
        Header: 'Wheels',
        accessor: 'wheels',
      },
    ],
  },
];

export default VehicleTable;

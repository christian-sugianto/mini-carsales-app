import React from 'react';
import { useTable } from 'react-table';
import { Table as MaUTable, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import colors from '../assets/consts';
import { VehicleType } from '../services/CarsService';

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
        {headerGroups.map((headerGroup, key) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={key}>
            {headerGroup.headers.map((column, secondKey) => (
              <TableCell
                {...column.getHeaderProps()}
                style={{ color: colors.secondaryColor }}
                key={secondKey}
              >
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} key={key}>
              {row.cells.map((cell, secondKey) => {
                return (
                  <TableCell {...cell.getCellProps()} style={{ color: 'white' }} key={secondKey}>
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
        Cell: VehicleTypeCell,
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

function VehicleTypeCell({ value }: any) {
  return <>{VehicleType[value]}</>;
}

export default VehicleTable;

// Table.tsx
import React from 'react';
import Header from '../tableheader/Header';
import Row from '../tablerow/Row';
import './table.module.scss';

interface TableProps {
  headers: string[];
  data: string[][];
  onCellEdit: (newValue: string, rowIndex: number, columnIndex: number) => void;
}

const Table: React.FC<TableProps> = ({ headers, data, onCellEdit }) => {
  return (
    <table>
      <Header headers={headers} />
      <tbody>
        {data.map((row, rowIndex) => (
          <Row
            key={rowIndex}
            rowData={row}
            onCellEdit={(newValue, columnIndex) =>
              onCellEdit(newValue, rowIndex, columnIndex)
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
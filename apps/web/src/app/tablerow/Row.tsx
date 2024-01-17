// Row.tsx
import React from 'react';
import Cell from '../tablecell/Cell';
import './tablerow.module.scss';

interface RowProps {
  rowData: string[];
  onCellEdit: (newValue: string, columnIndex: number) => void;
}

const Row: React.FC<RowProps> = ({ rowData, onCellEdit }) => {
  return (
    <tr>
      {rowData.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onEdit={(newValue) => onCellEdit(newValue, index)}
        />
      ))}
    </tr>
  );
};

export default Row;
// Cell.tsx
import React, { useState } from 'react';
import './tablecell.module.scss'

interface CellProps {
  value: string;
  onEdit: (newValue: string) => void;
}

const Cell: React.FC<CellProps> = ({ value, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onEdit(editedValue);
  };

  return (
    <td onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={editedValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        value
      )}
    </td>
  );
};

export default Cell;

import React, { useState } from 'react';

interface TableRowProps {
  data: { id: number; age: number; firstName: string; lastName: string; fullName: string };
  onEdit: (newData: { id: number; age: number; firstName: string; lastName: string; fullName: string }) => void;
  isEditing: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ data, onEdit, isEditing }) => {
  const [editedData, setEditedData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const updatedData = {
      ...editedData,
      fullName: `${editedData.firstName} ${editedData.lastName}`,
    };
    onEdit(updatedData);
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <input type="number" name="age" value={editedData.age} onChange={handleChange} readOnly={!isEditing} />
      </td>
      <td>
        <input type="text" name="firstName" value={editedData.firstName} onChange={handleChange} readOnly={!isEditing} />
      </td>
      <td>
        <input type="text" name="lastName" value={editedData.lastName} onChange={handleChange} readOnly={!isEditing} />
      </td>
      <td>{data.fullName}</td>
    </tr>
  );
};

export default TableRow;
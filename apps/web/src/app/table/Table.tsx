
import React, { useState } from 'react';
import TableHeader from '../tableheader/Header';
import TableRow from '../tablerow/Row';
import './table.module.scss';



interface TableProps {
  data: Array<{ id: number; age: number; firstName: string; lastName: string;}>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [editedData, setEditedData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (
    index: number,
    newData: { id: number; age: number; firstName: string; lastName: string; }
  ) => {
    const updatedData = [...editedData];
    updatedData[index] = newData;
    setEditedData(updatedData);
  };

  const handleSaveChanges = () => {
    const updatedData = editedData.map((row) => ({
      ...row,
      // fullName: `${row.firstName} ${row.lastName}`,
    }));
    // Save changes to the server or perform any other necessary actions
    console.log(updatedData);
    setIsEditing(false);
  };

  const handleEditAll = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <button onClick={handleEditAll}> Edit </button>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {editedData.map((row, index) => (
            <TableRow key={row.id} data={row} onEdit={(newData) => handleEdit(index, newData)} isEditing={isEditing} />
          ))}
        </tbody>
      </table>
      {isEditing && <button onClick={handleSaveChanges}>Save Changes</button>}
    </div>
  );
};

export default Table;
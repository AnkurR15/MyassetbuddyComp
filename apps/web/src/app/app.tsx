import React, { useState } from 'react';
import Table from './table/Table';

const App: React.FC = () => {
  const headers = ['FirstName', 'lastName', 'FullName'];
  const initialData = [['John', 'Wick', 'John Wick'], ['Jon', 'Jones', 'Jon Jones'], ['John', 'Cena', 'John Cena']];
  const [data, setData] = useState(initialData);

  const handleCellEdit = (newValue: string, rowIndex: number, columnIndex: number) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = newValue;
    setData(newData);
  };

  return (
    <div>
      <h1> Table</h1>
      <Table headers={headers} data={data} onCellEdit={handleCellEdit} />
    </div>
  );
};

export default App;
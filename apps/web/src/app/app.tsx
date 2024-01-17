import React, { useState } from 'react';
import Table from './table/Table';
import './app.module.scss';


const App: React.FC = () => {
  const headers = ['ID','FirstName', 'lastName', 'FullName','Age'];
  const initialData = [
    [1,'John', 'Wick', 'John Wick',25],
    [2,'Joe', 'Jones', 'Joe Jones',35], 
    [3,'sam', 'Cena', 'sam Cena',20],
    [4,'dawyne', 'Wick', 'dawyne Wick',28],
    [5,'shwan', 'Jones', 'shwan Jones',15], 
    [6,'lee', 'Cena', 'lee Cena',22],
    
  ];
   
  const [data, setData] = useState(initialData);

  const handleCellEdit = (newValue: string, rowIndex: number, columnIndex: number) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = newValue;
    setData(newData);
  };

  return (
    <div>
      <h1 > Table</h1>
      <Table headers={headers} data={data.map(row => row.map(cell => String(cell)))} onCellEdit={handleCellEdit} />
    </div>
  );
};

export default App;



import React from 'react';
import Table from './table/Table';

const App: React.FC = () => {
  const data = [
    { id: 1, age: 20, firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    
    { id: 2, age: 20, firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    
    { id: 3, age: 20, firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },

    { id: 4, age: 25, firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith' },
    // Add more data rows as needed
  ];

  return (
    <div>
      <h1>Table Example</h1>
      <Table data={data} />
    </div>
  );
};

export default App;
import React from 'react';
import './tableheader.module.scss';

const TableHeader: React.FC = () => {
  return (
    <tr>
      <th>ID</th>
      <th>Age</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  );
};

export default TableHeader;
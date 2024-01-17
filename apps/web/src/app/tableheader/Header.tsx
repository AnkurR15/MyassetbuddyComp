// Header.tsx
import React from 'react';
import './tableheader.module.scss'

interface HeaderProps {
  headers: string[];

  
}

const Header: React.FC<HeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}> {header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
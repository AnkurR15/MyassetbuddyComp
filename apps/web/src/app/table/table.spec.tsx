import { render } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Table headers={[]} data={[]} onCellEdit={function (newValue: string, rowIndex: number, columnIndex: number): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});

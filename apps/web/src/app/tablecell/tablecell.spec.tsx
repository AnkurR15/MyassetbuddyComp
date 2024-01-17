import { render } from '@testing-library/react';
import Cell from './Cell';
// Import the Tablecell component

describe('Tablecell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cell value={''} onEdit={function (newValue: string): void {
      throw new Error('Function not implemented.');
    } }/>);
    expect(baseElement).toBeTruthy();
  });
});

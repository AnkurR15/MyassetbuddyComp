import { render } from '@testing-library/react';

import Row from './Row';

describe('Tablerow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Row rowData={[]} onCellEdit={function (newValue: string, columnIndex: number): void {
      throw new Error('Function not implemented.');
    } }/>);
    expect(baseElement).toBeTruthy();
  });
});

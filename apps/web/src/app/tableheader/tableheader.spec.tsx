import { render } from '@testing-library/react';

import Header from './Header';

describe('Tableheader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header headers={[]}/>);
    expect(baseElement).toBeTruthy();
  });
});

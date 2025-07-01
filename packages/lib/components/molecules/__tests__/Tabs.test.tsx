import React from 'react';

import { fireEvent, render, screen } from '../../../helpers/test-utils';
import { Tabs } from '../Tabs';

describe('Tabs', () => {
  it('should render', () => {
    const handler = jest.fn();
    render(
      <Tabs
        data={[
          { value: 'item1', label: 'Item 1' },
          { value: 'item2', label: 'Item 2' },
        ]}
        value={'item1'}
        onChange={handler}
      />,
    );

    const tab2 = screen.getByText('Item 2');
    fireEvent.press(tab2);

    expect(handler).toHaveBeenCalledWith('item2');
  });
});

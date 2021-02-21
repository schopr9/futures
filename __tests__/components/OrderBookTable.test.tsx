import React from 'react';
import { render } from '@testing-library/react-native';
import OrderBookTable from 'app/components/OrderBookTable';

import * as redux from 'react-redux';

describe('Order book table', () => {
  it('mounts Maintenance route if maintenance mode is enabled', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useSelector');
    useDispatchSpy.mockReturnValue([{ price: 67.89, size: 20, total: 100 }]);
    const { toJSON } = render(<OrderBookTable />);
    expect(toJSON).toMatchSnapshot();
  });
});

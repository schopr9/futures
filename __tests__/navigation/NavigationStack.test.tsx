import React from 'react';
import { render } from '@testing-library/react-native';
import App from 'app/navigation/NavigationStack';

import * as redux from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('NavigationStack', () => {
  it('mounts Maintenance route if maintenance mode is enabled', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const { toJSON } = render(
      <App theme={{ dark: true, colors: { primary: 'blue' } }} />,
    );
    expect(toJSON).toMatchSnapshot();
  });
});

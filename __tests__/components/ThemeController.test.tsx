import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ThemeController from 'app/components/ThemeController';

import * as redux from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Theme controller', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  useSelectorSpy.mockReturnValue(false);
  it('initial theme not dark', () => {
    const { toJSON } = render(<ThemeController />);
    expect(toJSON).toMatchSnapshot();
  });

  it.skip('should toggle theme on button click', () => {
    let mockDispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(mockDispatch);
    const { getByTestId } = render(<ThemeController />);
    const input = getByTestId('switch');
    fireEvent.changeText(input);
    expect(mockDispatch).toHaveBeenCalled();
  });
});

import { setIsDarkTheme } from 'app/store/actions/themeActions';
import * as types from 'app/store/actions/types';

describe('Theme actions', () => {
  it('should return is dark true', () => {
    expect(setIsDarkTheme(true)).toMatchObject({
      type: types.TOGGLE_THEME,
      isDark: true,
    });
  });
});

import {createSelector} from '@ngrx/store';

import {IAppState} from '../../../store';
import {ITitle} from './title.reducer';

export const selectTitleStore = (state: IAppState) => state.TitleState;

export const selectTitle = createSelector(
  selectTitleStore,
  (state: ITitle) => state.title,
);

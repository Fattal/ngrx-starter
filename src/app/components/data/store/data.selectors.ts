import {createSelector} from '@ngrx/store';

import {IAppState} from '../../../store';
import {ITitle} from '../../title/store/title.reducer';

const selectTitle = createSelector(
  (state: IAppState) => state.TitleState,
  (state: ITitle) => state.title,
);

export default {
  selectTitle,
};

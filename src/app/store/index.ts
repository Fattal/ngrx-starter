import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppReducer, ITitle } from '../components/title/store/title.reducer';


export interface IAppState {
  TitleState: ITitle;
  // other
}

export const reducers: ActionReducerMap<IAppState> = {
  TitleState: AppReducer,
  // others reducers
};

export const metaReducers: MetaReducer<IAppState>[] = [];

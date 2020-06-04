import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppReducer, IApp } from '../components/title/title.reducer';


export interface IAppState {
  AppState: IApp;
  // other
}

export const reducers: ActionReducerMap<IAppState> = {
  AppState: AppReducer,
  // others reducers
};

export const metaReducers: MetaReducer<IAppState>[] = [];

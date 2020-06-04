import {Action, createReducer, on} from '@ngrx/store';

import { addTitle } from './title.actions';

export interface IApp {
  title: string;
}

export const initialAppState: IApp = {
  title: '',
};

export const reducer = createReducer(
  initialAppState as IApp,
  on(addTitle, (state, { title }) => ({ ...state, title })),
);

export function AppReducer(state: IApp, action: Action): IApp {
  return reducer(state, action) as IApp;
}
